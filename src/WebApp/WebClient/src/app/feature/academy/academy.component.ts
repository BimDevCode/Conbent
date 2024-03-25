import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleEntity } from '../../core/models/articleEntity';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from '../../core/services/breadcrumb.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrl: './academy.component.scss'
})
export class AcademyComponent implements OnInit {

  cookbookImage = "../../../../../assets/images/cookbook.jpg";
  title = 'material-responsive-sidenav';
  hideButtonText : string = 'Hide About';
  showButtonText : string = 'Show About';
  buttonText = this.hideButtonText;

  @ViewChild(RouterOutlet)
  routerOutlet!: RouterOutlet;

  isCollapsed = false;
  isMobile= false;
  itemArticle1: ArticleEntity|undefined = new ArticleEntity();
  itemArticle2: ArticleEntity|undefined = new ArticleEntity();
  itemArticle3: ArticleEntity|undefined = new ArticleEntity();
  home: MenuItem | undefined;
  items$: Observable<MenuItem[]> | undefined;
  items: MenuItem[] | undefined;
  constructor(private observer: BreakpointObserver, private breadcrumbService: BreadcrumbService) {}
  
  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
    this.breadcrumbService.setBreadcrumbs();//TODO: improve, duplicates if breadcrumbService injects first time
    this.items$ = this.breadcrumbService.getBreadcrumbs();
    this.items$?.subscribe((items) => {
      this.items = items;
    });
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

  toggleMenu() {
    this.buttonText = this.buttonText === this.showButtonText ? this.hideButtonText:this.showButtonText  ;
  }
}
