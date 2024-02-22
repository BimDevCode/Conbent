import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SharedModule } from '../../shared/shared.module';
import { IntroComponent } from './components/intro/intro.component';
import { AncientGreekPartComponent } from './components/ancient-greek-part/ancient-greek-part.component';
import { NextStepPartComponent } from './components/next-step-part/next-step-part.component';
import { ParallaxADirective } from './components/parallax-a.directive';




@NgModule({
  declarations: [
    MainPageComponent,
    IntroComponent,
    AncientGreekPartComponent,
    NextStepPartComponent,
    ParallaxADirective

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MainPageComponent,
    IntroComponent,
    AncientGreekPartComponent,
    NextStepPartComponent,
    ParallaxADirective

  ]
})
export class MainPageModule { }
