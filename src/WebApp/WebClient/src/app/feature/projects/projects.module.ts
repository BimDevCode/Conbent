import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsReadingComponent } from './projects-reading/projects-reading.component';
import { ProjectsObservingComponent } from './projects-observing/projects-observing.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsReadingComponent,
    ProjectsObservingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
  ]
})
export class ProjectsModule { }
