import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleReadingComponent } from './article-reading/article-reading.component';
import { ArticleObservingComponent } from './article-observing/article-observing.component';
import { AcademyRoutingModule } from './academy-routing.module';
import { ArticleCardItemComponent } from './article-card-item/article-card-item.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ArticleReadingComponent,
    ArticleObservingComponent,
    ArticleCardItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AcademyRoutingModule,
  ],
  exports: [
    SharedModule
  ]
})
export class AcademyModule {

 }
