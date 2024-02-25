import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { ColorType } from '../ColorTypeEnum';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.scss'
})
export class CardContentComponent implements AfterViewInit{
  title: any;
  readonly cardClassName : string = 'card-rectangle';
  @Input('description') description = '';
  @Input('borderRadius') borderRadius = '10,0,10,0';
  @Input('colorBackground') colorBackground = '#4b543b';

  constructor(private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}
  ngAfterViewInit(): void {
    var htmlRectangle = this.elementRef.nativeElement.querySelector('.' + this.cardClassName) as HTMLElement;
    htmlRectangle.style.backgroundColor = this.colorBackground;
    this.borderRadius.split(',').forEach((value,index) => {
      var valuePixel = value + 'px';
      if(index === 0) htmlRectangle.style.borderTopLeftRadius = valuePixel;
      if(index === 1) htmlRectangle.style.borderTopRightRadius = valuePixel;
      if(index === 2) htmlRectangle.style.borderBottomRightRadius = valuePixel;
      if(index === 3) htmlRectangle.style.borderBottomLeftRadius = valuePixel;
    });
  }
}
