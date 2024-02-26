import { Component, Input, OnInit } from '@angular/core';
import { ArticleEntity } from '../../../core/models/articleEntity';
import { AcademyService } from '../academy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-reading',
  templateUrl: './article-reading.component.html',
  styleUrl: './article-reading.component.scss'
})
export class ArticleReadingComponent implements OnInit {
  @Input() article?: ArticleEntity;

  constructor(private academyService: AcademyService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) this.academyService.getArticle(+id).subscribe({
      next: product => {
        this.article = product;
        if(this.article.texts.length == 0) this.article.texts.push('No text found for this article');
        else if(this.article.texts.length > 1 ){
          
        }
        else if(this.article.texts.length === 1 ){
          this.article.texts = this.divideStringIntoParagraphs(this.article.texts[0], 600);
        }
        //this.bcService.set('@productDetails', product.name);
        },
      error: error => console.log(error)
    });

    
  }
  divideStringIntoParagraphs(input: string, length: number): string[] {
    let result: string[] = [];
    let start = 0;
    let end = length;

    while (start < input.length) {
        end = input.indexOf('.', end);
        if (end === -1) {
            end = input.length;
        } else {
            end += 1; // Include the dot in the paragraph
        }

        result.push(input.substring(start, end));
        start = end;
        end = start + length;
    }
    return result;
  }
}
