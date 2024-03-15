import { AfterViewInit, Component, ElementRef, HostBinding, Renderer2, Input, ViewChild, OnInit } from '@angular/core';
import { ArticleEntity } from '../../../core/models/articleEntity';
import { RandomColorService } from '../../../core/random-color.service copy';
@Component({
  selector: 'app-article-card-item',
  templateUrl: './article-card-item.component.html',
  styleUrl: './article-card-item.component.scss'
})
export class ArticleCardItemComponent implements OnInit{

  @Input() article?: ArticleEntity;
  @ViewChild('card') card!: ElementRef;

  @HostBinding('style.backgroundColor') backgroundColor = `1px solid ${this.randomColorService.getRandomColor()}`;
  imagePath: any ;
  constructor(private randomColorService: RandomColorService) {
    if(this.card !== undefined) {
      this.imagePath = 'https://picsum.photos/200/200/?random';
    }
  }
  ngOnInit(): void {
    if(this.card !== undefined) {
      this.imagePath = 'https://picsum.photos/200/200/?random';
    }
  }

  ngAfterViewInit(): void {
    this.card.nativeElement.style.border = `1px solid ${this.randomColorService.getRandomColor()}`;
    this.card.nativeElement.style.backgroundColor = this.randomColorService.getRandomColor();
  }

}
