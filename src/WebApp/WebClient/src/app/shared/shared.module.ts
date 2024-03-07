import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CardContentComponent } from './card-content/card-content.component';
import { PageContentComponent } from './pager/page-content/page-content.component';
import { PageHeaderComponent } from './pager/page-header/page-header.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownButtonComponent } from './dropdown-button/dropdown-button.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
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
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    ToastModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [ //Connected to core.module.ts
    NavbarComponent,
    PaginationModule,
    PageContentComponent,
    PageHeaderComponent,
    ReactiveFormsModule,
    CarouselModule,
    FooterComponent,
    BsDropdownModule,
    ToastModule,
    CardContentComponent,
    DropdownButtonComponent,
    CarouselComponent,
    SanitizeHtmlPipe
  ]
})
export class SharedModule { }
