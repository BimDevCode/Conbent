import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageComponent } from './account-page/account-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DetailProjectPageComponent } from './detail-project-page/detail-project-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainPageModule } from './main-page/main-page.module';
import { AcademyModule } from './academy/academy.module';

@NgModule({

  declarations: [
    AccountPageComponent,
    ContactPageComponent,
    DetailProjectPageComponent,
    ProjectPageComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AcademyModule,
    MainPageModule
  ],
  exports: [
    AccountPageComponent,
    ContactPageComponent,
    DetailProjectPageComponent,
    ProjectPageComponent,
    SignInComponent
  ]
})
export class FeatureModule { }
