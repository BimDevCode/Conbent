import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CardContentComponent } from './card-content/card-content.component';
import { PageContentComponent } from './pager/page-content/page-content.component';
import { PageHeaderComponent } from './pager/page-header/page-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownButtonComponent } from './dropdown-button/dropdown-button.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [ //Connected to core.module.ts
    NavbarComponent,
    FooterComponent,
    CardContentComponent,
    PageContentComponent,
    PageHeaderComponent,
    DropdownButtonComponent,
    CarouselComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    ToastModule,//.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [ //Connected to core.module.ts
    NavbarComponent,
    PageContentComponent,
    PageHeaderComponent,
    ReactiveFormsModule,
    FooterComponent,
    ToastModule,
    CardContentComponent,
    DropdownButtonComponent,
    CarouselComponent,
    SanitizeHtmlPipe
  ]
})
export class SharedModule { }
