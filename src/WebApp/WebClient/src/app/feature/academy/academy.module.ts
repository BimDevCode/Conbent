import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleReadingComponent } from './article-reading/article-reading.component';
import { ArticleObservingComponent } from './article-observing/article-observing.component';
import { AcademyRoutingModule } from './academy-routing.module';
import { ArticleCardItemComponent } from './article-card-item/article-card-item.component';
import { SharedModule } from '../../shared/shared.module';
import { AcademyComponent } from './academy.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { TreeSelectModule } from 'primeng/treeselect';
import { TreeModule } from 'primeng/tree';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ChipModule } from 'primeng/chip';
import { ArticleCommentsComponent } from './article-comments/article-comments.component';

@NgModule({
  declarations: [
    ArticleReadingComponent,
    ArticleObservingComponent,
    ArticleCardItemComponent,
    AcademyComponent,
    ArticleCommentsComponent,
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    ChipModule,
    TreeModule,
    PaginatorModule,
    SharedModule,
    DialogModule,
    ConfirmPopupModule,
    TreeSelectModule,
    AcademyRoutingModule,
    DropdownModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    DataViewModule,
    MatListModule,
  ],
  exports: [
    SharedModule,
  ]
})
export class AcademyModule {

}
