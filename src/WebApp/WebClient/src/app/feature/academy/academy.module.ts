import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleReadingComponent } from './article-reading/article-reading.component';
import { ArticleObservingComponent } from './article-observing/article-observing.component';
import { AcademyRoutingModule } from './academy-routing.module';



@NgModule({
  declarations: [
    ArticleReadingComponent,
    ArticleObservingComponent
  ],
  imports: [
    CommonModule,
    AcademyRoutingModule
  ]
})
export class AcademyModule { }
