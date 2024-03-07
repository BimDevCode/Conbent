import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AcademyService } from '../academy.service';
import { ArticleSpecParams } from '../../../core/models/articleSpecParams';
import { ArticleEntity } from '../../../core/models/articleEntity';
import { Tag } from '../../../core/models/tag';
import { Technology } from '../../../core/models/technology';
import { Pagination } from '../../../core/models-shared/pagination';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService, TreeNode } from 'primeng/api';

@Component({
  selector: 'app-article-observing',
  templateUrl: './article-observing.component.html',
  styleUrl: './article-observing.component.scss',
  providers: [MessageService]
})
export class ArticleObservingComponent implements OnInit {
  hideButtonText : string = 'Hide Sort';
  showButtonText : string = 'Show Sort';
  buttonText = this.hideButtonText;
  @ViewChild('search') searchTerm?: ElementRef;
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isCollapsed = false;
  isMobile= true;
  nodes!: any[];
  formGroup!: FormGroup;
  selectedNodes!: TreeNode;
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

  constructor(private academyService: AcademyService,
    private observer: BreakpointObserver,
    private messageService: MessageService
    ) {
    this.articleParameters = academyService.getArticleParameters();
  }

  ngOnInit(): void {
    this.getArticles();
    this.getPaths();
    this.getTechnologies();
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
    this.formGroup = new FormGroup({
      selectedNodes: new FormControl()
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
    this.buttonText = this.buttonText === this.showButtonText ? this.hideButtonText:this.showButtonText  ;

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
  getPaths() {
    this.getTags();
    this.academyService.getArticleEntities().subscribe({
      next: response => {
        this.nodes = this.academyService.getTreePathNodes(response.data,this.tags);
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


  nodeSelect(event: any) {
      this.messageService.add({ severity: 'info', summary: 'Tag Selected', detail: event.node.label });
      let selectedTagData = event.node.data;
      const params = this.academyService.getArticleParameters();
      params.tagId = selectedTagData;
      this.academyService.setArticleParameters(params);
      this.articleParameters = params;
      this.getArticles();
  }

  nodeUnselect(event: any) {
      this.messageService.add({ severity: 'info', summary: 'Tag Unselected', detail: event.node.label });
  }

}
