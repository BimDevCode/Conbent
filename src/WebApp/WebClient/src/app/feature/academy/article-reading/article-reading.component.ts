import { Component, Input } from '@angular/core';
import { ArticleEntity } from '../../../core/models/articleEntity';

@Component({
  selector: 'app-article-reading',
  templateUrl: './article-reading.component.html',
  styleUrl: './article-reading.component.scss'
})
export class ArticleReadingComponent {
  @Input() article?: ArticleEntity;
}
