import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { gsap } from "gsap";
import { CSSPlugin } from 'gsap/CSSPlugin';

@Component({
    selector: 'about-page-fade',
    templateUrl: './about-page-fade.component.html',
    styleUrl: './about-page-fade.component.scss'
})
export class AboutPageFadeComponent implements OnInit{
  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(
        {
          CSSPlugin
        }
      );
    }
  }


  fadeInOnScroll(visible: boolean): void {
    if (visible) {
      const element = this.elementRef.nativeElement.querySelector('.fade-in-element');
      gsap.fromTo(
        element,
        { opacity: 0, x: -50 }, // Start from left (-50px)
        {
          opacity: 1,
          x: 0, // Move to center
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%', // Adjust this value based on when you want the animation to start
            end: 'bottom 20%', // Adjust this value based on when you want the animation to end
            scrub: true // Smoothing the animation when scrolling
          }
        }
      );
    }
  }
}
