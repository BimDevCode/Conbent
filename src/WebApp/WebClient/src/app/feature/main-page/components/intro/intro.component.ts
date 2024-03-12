import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import $ from 'jquery';//Leave for JS sript
import { ScriptLoaderService } from '../../../../core/script-loader.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})

export class IntroComponent implements OnInit {
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
    this.loadScript('../../../../../assets/js/main-page/intro.js');
    this.loadScript('//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js');
  }


  loadScript(urnName: string){
    const s = this.renderer.createElement('script');
    s.type = 'text/javascript';
    s.src = urnName; // replace with the actual path to your script
    this.renderer.appendChild(this.document.body, s);
  }
}
