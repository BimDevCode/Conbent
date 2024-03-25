import { AfterViewInit, Component, ElementRef, HostBinding, Renderer2, Input, ViewChild, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { ArticleEntity } from '../../../core/models/articleEntity';
import { RandomColorService } from '../../../core/random-color.service copy';
import { AcademyService } from '../academy.service';
@Component({
  selector: 'app-article-card-item',
  templateUrl: './article-card-item.component.html',
  styleUrl: './article-card-item.component.scss'
})
export class ArticleCardItemComponent implements AfterViewInit{
  @Input() article?: ArticleEntity;
  @ViewChild('card') card!: ElementRef;
  @ViewChild('articleCard') articleCard!: ElementRef;
  imagePath: any;
  isSmallCard = false;
  constructor(private randomColorService: RandomColorService, private academyService: AcademyService) {}
  @Output() nodeSelected = new EventEmitter<any>();
  

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.checkCardSize();
  }

  ngAfterViewInit(): void {
    this.card.nativeElement.style.backgroundColor = this.randomColorService.getRandomColor();
    this.checkCardSize();
  }
  checkCardSize() {
    this.isSmallCard = this.articleCard.nativeElement.offsetWidth < 30 * 16; // 10rem assuming 1rem = 16px
  }
  onTagSelected($event: any) {
    let eventNode = { node: { label: '', data: '' } };
    eventNode.node.label = $event.target.innerText;
    eventNode.node.data = $event.target.innerText;
    this.nodeSelected.emit(eventNode);
  }
}
