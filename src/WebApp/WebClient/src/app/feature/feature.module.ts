import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademyPageComponent } from './academy-page/academy-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DetailProjectPageComponent } from './detail-project-page/detail-project-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainPageModule } from './main-page/main-page.module';

@NgModule({
  declarations: [
    AcademyPageComponent,
    AccountPageComponent,
    ContactPageComponent,
    DetailProjectPageComponent,
    ProjectPageComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    MainPageModule
  ],
  exports: [
    AcademyPageComponent,
    AccountPageComponent,
    ContactPageComponent,
    DetailProjectPageComponent,
    ProjectPageComponent,
    SignInComponent
  ]
})
export class FeatureModule { }
