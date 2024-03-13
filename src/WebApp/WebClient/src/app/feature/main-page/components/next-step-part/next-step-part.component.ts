import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { gsap } from "gsap";
import { CSSPlugin } from 'gsap/CSSPlugin';
@Component({
  selector: 'app-next-step-part',
  templateUrl: './next-step-part.component.html',
  styleUrl: './next-step-part.component.scss'
})
export class NextStepPartComponent implements OnInit{
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

  fadeInOnScrollLeft(visible: boolean): void {
    const element = this.elementRef.nativeElement.querySelector('.fade-in-element-left');
    if (visible) {
      gsap.fromTo(
        element,
        { x: -200 }, // Start from left (-50px)
        {
          x: 0, // Move to center
          duration: 1.5,
          scrollTrigger: {
            trigger: element,
            start: 'top 81%', // Adjust this value based on when you want the animation to start
            end: 'bottom 20%', // Adjust this value based on when you want the animation to end
            scrub: true // Smoothing the animation when scrolling
          },
          ease: 'bounce.out'
        }
      );
    }
    else {
      gsap.fromTo(
        element,
        {  x: 0 }, 
        {
          x: -200, // Move to center
          duration: 0.5,
          scrollTrigger: {
            trigger: element,
            start: 'top 81%', // Adjust this value based on when you want the animation to start
            end: 'bottom 20%', // Adjust this value based on when you want the animation to end
            scrub: true // Smoothing the animation when scrolling
          }
        }
      );
    }
  }
  fadeInOnScrollRight(visible: boolean): void {
    const element = this.elementRef.nativeElement.querySelector('.fade-in-element-right');
    if (visible) {
      gsap.fromTo(
        element,
        {  x: 200 }, // Start from left (-50px)
        {
          x: 0, // Move to center
          duration: 1.5,
          scrollTrigger: {
            trigger: element,
            start: 'top 81%', // Adjust this value based on when you want the animation to start
            end: 'bottom 20%', // Adjust this value based on when you want the animation to end
            scrub: true // Smoothing the animation when scrolling
          }
          ,
          ease: 'bounce.out'
        }
      );
    }
    else {
      gsap.fromTo(
        element,
        { x: 0 }, 
        {
          x: 200, // Move to center
          duration: 0.5,
          scrollTrigger: {
            trigger: element,
            start: 'top 81%', // Adjust this value based on when you want the animation to start
            end: 'bottom 20%', // Adjust this value based on when you want the animation to end
            scrub: true // Smoothing the animation when scrolling
          }

        },
      );
    }
  }
}
