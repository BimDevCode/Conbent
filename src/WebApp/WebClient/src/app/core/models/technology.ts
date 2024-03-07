import { BaseEntity } from "./contractors/BaseEntity";

export interface Technology {
  description: string;
}

export class Technology implements Technology, BaseEntity {
  id: number = 0;
  name: string = 'Technology';
}
