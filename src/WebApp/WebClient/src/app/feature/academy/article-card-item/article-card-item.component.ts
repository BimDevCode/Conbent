import { AfterViewInit, Component, ElementRef, HostBinding, Renderer2, Input, ViewChild } from '@angular/core';
import { ArticleEntity } from '../../../core/models/articleEntity';

@Component({
  selector: 'app-article-card-item',
  templateUrl: './article-card-item.component.html',
  styleUrl: './article-card-item.component.scss'
})
export class ArticleCardItemComponent implements AfterViewInit{
  
  @Input() article?: ArticleEntity;
  @ViewChild('card') card!: ElementRef;
  
  colors = ['#4b543b', '#5b7c99', '#423629'];

  @HostBinding('style.backgroundColor') backgroundColor = this.getRandomColor();
  
  ngAfterViewInit(): void {
    if(this.card !== undefined) this.card.nativeElement.style.backgroundColor = this.getRandomColor();
  }
  getRandomColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

}
