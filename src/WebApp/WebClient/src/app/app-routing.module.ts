import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './feature/main-page/main-page.component';
import { AcademyPageComponent } from './feature/academy-page/academy-page.component';
import { AccountPageComponent } from './feature/account-page/account-page.component';
import { ProjectPageComponent } from './feature/project-page/project-page.component';
import { DetailProjectPageComponent } from './feature/detail-project-page/detail-project-page.component';
import { ContactPageComponent } from './feature/contact-page/contact-page.component';
import { SignInComponent } from './feature/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'academy', component: AcademyPageComponent},
  { path: 'account', component: AccountPageComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'project', component: ProjectPageComponent},
  { path: 'detail-project', component: DetailProjectPageComponent},
  { path: 'contact', component: ContactPageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
