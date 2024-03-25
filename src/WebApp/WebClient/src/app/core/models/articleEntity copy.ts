import { BaseEntity } from "./contractors/BaseEntity";

export interface ArticleEntity {
  texts: string[];
  tags: string[];
  relevantScore: number;
  treePath: string ;
  createDateTime : string ;
  authorNameSurname : string ;
}

export class ArticleEntity implements ArticleEntity, BaseEntity {
  id: number = 0;
  tags: string[] = ['C#', 'Dotnetcore', 'Conbent'];
  name: string = 'ArticleEntity';
  treePath: string = 'Conbent/Dotnetcore';
  createDateTime : string = Date.now().toString();
  relevantScore: number = 0;
  authorNameSurname: string = "Mikalai Sabaleuski";
  texts: string[] = ['Sint in exercitation velit commodo. Amet reprehenderit laborum adipisicing duis officia. Nostrud sit enim excepteur irure elit eiusmod. Pariatur commodo in magna duis eiusmod aute ut cupidatat.', 'Sint in exercitation velit commodo. Amet reprehenderit laborum adipisicing duis officia. Nostrud sit enim excepteur irure elit eiusmod. Pariatur commodo in magna duis eiusmod aute ut cupidatat.'];
}
