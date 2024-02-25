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

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardContentComponent,
    PageContentComponent,
    PageHeaderComponent,
    DropdownButtonComponent,
    CarouselComponent,
  ],
  imports: [
    PaginationModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    PaginationModule,
    PageContentComponent,
    PageHeaderComponent,
    ReactiveFormsModule,
    CarouselModule,
    FooterComponent,
    BsDropdownModule,
    CardContentComponent,
    DropdownButtonComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
