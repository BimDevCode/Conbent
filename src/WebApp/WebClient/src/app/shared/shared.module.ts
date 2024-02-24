import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CardContentComponent } from './card-content/card-content.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardContentComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardContentComponent
  ]
})
export class SharedModule { }
