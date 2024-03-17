import { AfterViewInit, Component, ElementRef, HostBinding, Renderer2, Input, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleEntity } from '../../../core/models/articleEntity';
import { RandomColorService } from '../../../core/random-color.service copy';
import { AcademyService } from '../academy.service';
@Component({
  selector: 'app-article-card-item',
  templateUrl: './article-card-item.component.html',
  styleUrl: './article-card-item.component.scss'
})
export class ArticleCardItemComponent implements OnInit{
  @Input() article?: ArticleEntity;
  @ViewChild('card') card!: ElementRef;
  imagePath: any;

  constructor(private randomColorService: RandomColorService, private academyService: AcademyService) {}
  @Output() nodeSelected = new EventEmitter<any>();
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.card.nativeElement.style.backgroundColor = this.randomColorService.getRandomColor();
  }

  onTagSelected($event: any) {
    let eventNode = { node: { label: '', data: '' } };
    eventNode.node.label = $event.target.innerText;
    eventNode.node.data = $event.target.innerText;
    this.nodeSelected.emit(eventNode);
  }
}
