import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ArticleObservingComponent } from './article-observing/article-observing.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrl: './academy.component.scss'
})
export class AcademyComponent {

  cookbookImage = "../../../../../assets/images/cookbook.jpg";
  title = 'material-responsive-sidenav';
  hideButtonText : string = 'Hide About';
  showButtonText : string = 'Show About';
  buttonText = this.hideButtonText;

  @ViewChild(RouterOutlet)
  routerOutlet!: RouterOutlet;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isCollapsed = false;
  isMobile= false;

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
  toggleSort() {
    if (this.routerOutlet) {
      const component = this.routerOutlet.component as ArticleObservingComponent;
      if (component) {
        component.toggleMenu();
      } 
      
    }
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
}
