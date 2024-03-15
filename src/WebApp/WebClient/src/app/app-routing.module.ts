import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './feature/main-page/main-page.component';
import { AccountPageComponent } from './feature/account-page/account-page.component';
import { ProjectPageComponent } from './feature/project-page/project-page.component';
import { DetailProjectPageComponent } from './feature/detail-project-page/detail-project-page.component';
import { SignInComponent } from './feature/sign-in/sign-in.component';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'academy', loadChildren: () => import('./feature/academy/academy.module').then(m => m.AcademyModule)},
  { path: 'account', component: AccountPageComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'project', component: ProjectPageComponent},
  { path: 'detail-project', component: DetailProjectPageComponent},

  { path: '', component: AppLayoutComponent,
  children: [
      { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
      { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
      { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
      { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
      { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
      
  exports: [RouterModule]
})
export class AppRoutingModule { }
