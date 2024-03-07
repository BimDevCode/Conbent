import { BaseEntity } from "./contractors/BaseEntity";

export interface Tag {
  description: string;
}

export class Tag implements Tag, BaseEntity {
  id: number = 0;
  name: string = 'Tag';
}
