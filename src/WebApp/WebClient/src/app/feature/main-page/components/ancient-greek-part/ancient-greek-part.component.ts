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
export class AncientGreekPartComponent implements AfterViewInit {
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
  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.loadScript('https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js');
      this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/gsap.min.js');
      //this.loadScript('../../../../../assets/js/main-page/carousel.js');
    }
  }

  loadScript(urnName: string){
    const s = this.renderer.createElement('script');
    s.type = 'text/javascript';
    s.src = urnName; // replace with the actual path to your script
    this.renderer.appendChild(this.document.body, s);
  }

}
