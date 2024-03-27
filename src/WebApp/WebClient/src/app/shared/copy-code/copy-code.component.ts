import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as hljsCore from '../../../../node_modules/highlight.js/lib/core';

@Component({
  selector: 'app-copy-code',
  templateUrl: './copy-code.component.html',
  styleUrl: './copy-code.component.scss'
})
export class CopyCodeComponent implements AfterViewInit{
  @ViewChild('codeBlock') codeBlock!: ElementRef;
  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }
  ngAfterViewInit(): void {
    this.highlightCode();
  }

  ngOnInit(): void {

  }
  private highlightCode(): void {
    try {
      let hjs = require('../../../../node_modules/highlight.js/lib/languages/csharp.js')
      hljsCore.default.registerLanguage('cs', hjs);
      var d = hljsCore.default.getLanguage("cs");
      hljsCore.default.highlightAll();
    }
    catch (error)
    {
      console.log(error);
    }
  }
  code: string = `using System;
  class Program
  {
      static void Main(string[] args)
      {
          Console.WriteLine("Hello, World!");
      }
  }`;
}
