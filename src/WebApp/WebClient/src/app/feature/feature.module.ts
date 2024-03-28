import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainPageModule } from './main-page/main-page.module';
import { AcademyModule } from './academy/academy.module';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FormsModule } from '@angular/forms';
import { AccountModule } from './account/account.module';

@NgModule({

  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    AccountModule,
    AcademyModule,
    MainPageModule,
    FormsModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    PanelMenuModule,
    ButtonModule
  ],
  exports: [
    SignInComponent
  ]
})
export class FeatureModule { }
