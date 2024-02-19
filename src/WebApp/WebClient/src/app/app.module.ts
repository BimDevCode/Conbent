import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageModule } from './feature/main-page/main-page.module';
import { SharedModule } from './shared/shared.module';
import { AcademyPageComponent } from './feature/academy-page/academy-page.component';
import { ProjectPageComponent } from './feature/project-page/project-page.component';
import { AccountPageComponent } from './feature/account-page/account-page.component';
import { DetailProjectPageComponent } from './feature/detail-project-page/detail-project-page.component';
import { ContactPageComponent } from './feature/contact-page/contact-page.component';
import { SignInComponent } from './feature/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AcademyPageComponent,
    ProjectPageComponent,
    AccountPageComponent,
    DetailProjectPageComponent,
    ContactPageComponent,
    SignInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    SharedModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
