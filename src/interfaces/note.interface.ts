export interface INote {
  id?: number;
  title: string;
  content: string;
  category?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
