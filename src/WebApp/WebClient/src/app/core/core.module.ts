import { NgModule } from '@angular/core';
import { FeatureModule } from '../feature/feature.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SigninCallbackComponent } from './components/signin-callback/signin-callback.component';

@NgModule({
  declarations: [
    // Remove SigninCallbackComponent from declarations
  ],
  imports: [
    CommonModule,
    FeatureModule,
    SharedModule,
    SigninCallbackComponent // Add SigninCallbackComponent to imports
  ],
  exports: [
    SharedModule,
  ]
})
export class CoreModule { }
