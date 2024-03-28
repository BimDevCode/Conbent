import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsObservingComponent } from './projects-observing/projects-observing.component';
import { ProjectsReadingComponent } from './projects-reading/projects-reading.component';

const routes: Routes = [
  {path: '',
  component: ProjectsComponent,
  children: [
    { path: '', component: ProjectsObservingComponent },
    { path: ':name', component: ProjectsReadingComponent },
    // more child routes can be added here
  ]},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProjectsRoutingModule { }
