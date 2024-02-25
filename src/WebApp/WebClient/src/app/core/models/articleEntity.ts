import { BaseEntity } from "./contractors/BaseEntity";

export interface ArticleEntity {
  text: string;
  relevantScore: number;
}

export class ArticleEntity implements ArticleEntity, BaseEntity {
  id: number = 0;
  name: string = 'ArticleEntity';
  relevantScore: number = 0;
  text: string = 'Sint in exercitation velit commodo. Amet reprehenderit laborum adipisicing duis officia. Nostrud sit enim excepteur irure elit eiusmod. Pariatur commodo in magna duis eiusmod aute ut cupidatat.';
}
