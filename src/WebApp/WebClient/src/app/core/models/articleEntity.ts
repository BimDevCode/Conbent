import { BaseEntity } from "./contractors/BaseEntity";

export interface ArticleEntity {
  text: string;
}

export class ArticleEntity implements ArticleEntity, BaseEntity {
  id!: number;
  name!: string;

}
