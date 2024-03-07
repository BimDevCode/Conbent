import { AfterViewInit, Component, ElementRef, HostBinding, Renderer2, Input, ViewChild } from '@angular/core';
import { ArticleEntity } from '../../../core/models/articleEntity';
import { RandomColorService } from '../../../core/random-color.service copy';
@Component({
  selector: 'app-article-card-item',
  templateUrl: './article-card-item.component.html',
  styleUrl: './article-card-item.component.scss'
})
export class ArticleCardItemComponent implements AfterViewInit{
  
  @Input() article?: ArticleEntity;
  @ViewChild('card') card!: ElementRef;

  @HostBinding('style.backgroundColor') backgroundColor = this.randomColorService.getRandomColor();
  
  constructor(private randomColorService: RandomColorService) {}
  
  ngAfterViewInit(): void {
    if(this.card !== undefined) this.card.nativeElement.style.backgroundColor = this.randomColorService.getRandomColor();
  }

}
