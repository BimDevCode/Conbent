import { Component, OnInit } from '@angular/core';
import { AcademyService } from '../academy.service';

@Component({
  selector: 'app-article-observing',
  templateUrl: './article-observing.component.html',
  styleUrl: './article-observing.component.scss'
})
export class ArticleObservingComponent implements OnInit {
  /**
   *
   */
  constructor(private academyService: AcademyService) {
    this.academyParameters = academyService.getArticleParameters();
  }

  ngOnInit(): void {
    this.getTags();
    this.getArticles();
    this.getTechlogies();
  }

}
