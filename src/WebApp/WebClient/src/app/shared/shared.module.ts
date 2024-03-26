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
import { DividerModule } from 'primeng/divider';
import { AccountChipComponent } from './account/account-chip/account-chip.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ //Connected to core.module.ts
    NavbarComponent,
    FooterComponent,
    CardContentComponent,
    PageContentComponent,
    PageHeaderComponent,
    DropdownButtonComponent,
    CarouselComponent,
    SanitizeHtmlPipe,
    AccountChipComponent
  ],
  imports: [
    ToastModule,//.forRoot(),
    ReactiveFormsModule,
    AvatarGroupModule,
    AvatarModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    RouterModule,
    DividerModule
  ],
  exports: [ //Connected to core.module.ts
    NavbarComponent,
    AvatarGroupModule,
    AvatarModule,
    PageContentComponent,
    DividerModule,
    PageHeaderComponent,
    ReactiveFormsModule,
    FooterComponent,
    ToastModule,
    ButtonModule,
    CardContentComponent,
    DropdownButtonComponent,
    CarouselComponent,
    AccountChipComponent,
    SanitizeHtmlPipe
  ]
})
export class SharedModule { }
