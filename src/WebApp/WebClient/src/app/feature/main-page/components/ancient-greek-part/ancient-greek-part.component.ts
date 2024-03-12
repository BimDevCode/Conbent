import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from "gsap";
import $ from 'jquery';//Leave for JS sript

@Component({
  selector: 'app-ancient-greek-part',
  templateUrl: './ancient-greek-part.component.html',
  styleUrl: './ancient-greek-part.component.scss'
})
export class AncientGreekPartComponent implements OnInit {
[x: string]: any;
  imageUrlA = '../../../../../assets/Image/OrderPartA.jpeg';
  imageUrlB = '../../../../../assets/Image/OrderPartB.jpeg';
  imageUrlC = '../../../../../assets/Image/OrderPartC.jpeg';
  imageUrlD = '../../../../../assets/Image/OrderPartD.jpeg';
  imageUrlE = '../../../../../assets/Image/OrderPartE.jpeg';
  imageUrlF = '../../../../../assets/Image/OrderPartF.jpeg';
  imageUrlG = '../../../../../assets/Image/OrderPartG.jpeg';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
  }
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
    }
  }

}
