import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AcademyService } from '../academy.service';
import { ArticleSpecParams } from '../../../core/models/articleSpecParams';
import { ArticleEntity } from '../../../core/models/articleEntity';
import { Tag } from '../../../core/models/tag';
import { Technology } from '../../../core/models/technology';
import { Pagination } from '../../../core/models-shared/pagination';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-article-observing',
  templateUrl: './article-observing.component.html',
  styleUrl: './article-observing.component.scss'
})
export class ArticleObservingComponent implements OnInit {
  @ViewChild('search') searchTerm?: ElementRef;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isCollapsed = true;
  isMobile= true;

  articleEntities: ArticleEntity[] = [];
  technologies: Technology[] = [];
  tags: Tag[] = [];
  pagination?: Pagination<ArticleEntity[]>;
  articleParameters = new ArticleSpecParams();

  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Relative Score: Low to high', value: 'priceAsc'},
    {name: 'Relative Score: High to low', value: 'priceDesc'},
  ];
  totalCount = 0;

  constructor(private academyService: AcademyService,private observer: BreakpointObserver) {
    this.articleParameters = academyService.getArticleParameters();
  }

  ngOnInit(): void {
    this.getArticles();
    this.getTags();
    this.getTechnologies();
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }

  getArticles() {
    this.academyService.getArticleEntities().subscribe({
      next: response => {
        this.articleEntities = response.data;
        this.totalCount = response.count;
      },
      error: error => console.log(error)
    })
  }

  getTags() {
    try {
      this.academyService.getTags().subscribe({
        next: response => this.tags = [{id: 0, name: 'All', description: ''}, ...response],
        error: error => console.log(error)
      })
    } catch (error) {

    }
  }

  getTechnologies() {
    this.academyService.getTechnologies().subscribe({
      next: response => this.technologies = [{id: 0, name: 'All', description: ''}, ...response],
      error: error => console.log(error)
    })
  }

  //TODO: Add tag
  // onTagSelected(tagId: number) {
  //   const params = this.academyService.getArticleParameters();
  //   params.pageIndex = 1;
  //   this.academyService.setArticleParameters(params);
  //   this.articleParameters = params;
  //   this.getArticles();
  // }

  onTechnologySelected(technologyId: number) {
    const params = this.academyService.getArticleParameters();
    params.technologyId = technologyId;
    params.pageIndex = 1;
    this.academyService.setArticleParameters(params);
    this.articleParameters = params;
    this.getArticles();
  }

  onSortSelected(event: any) {
    const params = this.academyService.getArticleParameters();
    params.sort = event.value;
    this.academyService.setArticleParameters(params);
    this.articleParameters = params;
    this.getArticles();
  }

  onPageChanged(event: any) {
    const params = this.academyService.getArticleParameters();
    if (params.pageIndex !== event) {
      params.pageIndex = event;
      this.academyService.setArticleParameters(params);
      this.articleParameters = params;
      this.getArticles();
    }
  }

  onSearch() {
    const params = this.academyService.getArticleParameters();
    params.search = this.searchTerm?.nativeElement.value;
    params.pageIndex = 1;
    this.academyService.setArticleParameters(params);
    this.articleParameters = params;
    this.getArticles();
  }

  onReset() {
    if (this.searchTerm) this.searchTerm.nativeElement.value = '';
    this.articleParameters = new ArticleSpecParams();
    this.academyService.setArticleParameters(this.articleParameters);
    this.getArticles();
  }
}
