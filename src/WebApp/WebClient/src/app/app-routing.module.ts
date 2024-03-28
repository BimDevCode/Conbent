import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './feature/main-page/main-page.component';
import { SignInComponent } from './feature/sign-in/sign-in.component';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { SigninCallbackComponent } from './core/components/signin-callback/signin-callback.component';

const routes: Routes = [
  { path: '', component: AppLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./feature/main-page/main-page.module').then(m => m.MainPageModule) },
      { path: 'account', loadChildren: () => import('./feature/account/account.module').then(m => m.AccountModule) },
      { path: 'academy', loadChildren: () => import('./feature/academy/academy.module').then(m => m.AcademyModule) ,data: { breadcrumb: 'Articles'}},
      { path: 'project', loadChildren: () => import('./feature/projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
      { path: 'dashboard', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
      { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) },
      { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
      { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
      { path: 'notfound', component: NotfoundComponent},
      { path: 'signin-callback', component: SigninCallbackComponent }
  ]},
  { path: 'home', component: MainPageComponent },
  { path: 'academy', loadChildren: () => import('./feature/academy/academy.module').then(m => m.AcademyModule)},
  { path: 'sign-in', component: SignInComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
