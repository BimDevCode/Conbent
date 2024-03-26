import { BaseEntity } from "./contractors/BaseEntity";

export interface UserEntity {
  surname: string;
  email: string;
  password: string;
  role: string;
  createDateTime: string;
}
export class UserEntity implements UserEntity, BaseEntity {
  id: number = 0;
  name: string = "Mikalai Sabaleuski";
}
