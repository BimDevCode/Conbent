import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleObservingComponent } from './article-observing/article-observing.component';
import { ArticleReadingComponent } from './article-reading/article-reading.component';


const routes: Routes = [
  {path: '', component: ArticleObservingComponent},
  {path: ':id', component: ArticleReadingComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AcademyRoutingModule { }
