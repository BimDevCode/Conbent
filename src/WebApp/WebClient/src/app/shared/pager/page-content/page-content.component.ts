import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss',
  encapsulation: ViewEncapsulation.None 
})
export class PageContentComponent implements AfterViewInit{
  
  @Input() totalCount?: number;
  @Input() pageSize?: number;
  @Input() pageIndex?: number;
  @Output() pageChanged = new EventEmitter<number>();

  onPagerChanged(event: any) {
    this.pageChanged.emit(event.page);
  }
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit(): void {
    // const element = this.el.nativeElement.querySelector('.pagination');
    // this.renderer.setStyle(element, 'border-radius', '10px');
    // element.style.setProperty('--bs-pagination-active-bg', 'var(--brown-color)');
    // element.style.setProperty('--bs-pagination-active-border-color', 'var(--brown-color)');
    // element.style.setProperty('--bs-pagination-color', 'var(--brown-color)');
    // element.style.setProperty('--bs-pagination-focus-color', 'var(--main-background-color)');
    // element.style.setProperty('--bs-pagination-hover-bg', 'var(--brown-color-dark)');
    // element.style.setProperty('--bs-pagination-hover-border-color', 'transparent');
    // element.style.setProperty('--bs-pagination-disabled-bg', 'var(--light-blue-color)');
    // element.style.setProperty('--bs-pagination-hover-color', 'var(--main-background-color)');
    // element.style.setProperty('--bs-pagination-focus-bg', 'var(--brown-color-dark)');
    // element.style.setProperty('--bs-pagination-bg', 'transparent');
    // element.style.setProperty('--bs-pagination-border-color', 'var(--brown-color-dark)');
    // element.style.setProperty('--bs-pagination-focus-box-shadow', '0 0 0 0.2rem var(--brown-color-dark)');
    // element.style.setProperty('--bs-pagination-disabled-border-color', 'var(--brown-color)');
    // element.style.setProperty('--bs-pagination-border-width', '0px');

    // const item = this.el.nativeElement.querySelector('.page-item ');
    // item.style.setProperty('-webkit-transition', 'all 0.3s ease-in-out');
    // item.style.setProperty('transition', 'all 0.3s  ease-in-out');

  }
}
