import { NgModule } from '@angular/core';
import { FeatureModule } from '../feature/feature.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureModule,
    SharedModule
  ],
  exports: [
    SharedModule,
  ]
})
export class CoreModule { }
