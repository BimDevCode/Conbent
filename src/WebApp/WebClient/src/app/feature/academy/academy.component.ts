import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ArticleObservingComponent } from './article-observing/article-observing.component';
import { RouterOutlet } from '@angular/router';
import { ArticleEntity } from '../../core/models/articleEntity';


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

  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  toggleMenu() {
    this.buttonText = this.buttonText === this.showButtonText ? this.hideButtonText:this.showButtonText  ;
  }
}
