import { Document } from 'mongoose';
import { IIngredient } from 'src/ingredient/interfaces/ingredient.interface';

export interface IMedicine extends Document {
  readonly _id: string;
  readonly createdAt: Date;
  readonly expirationDate: Date;
  readonly ingredients: IIngredient[];
  readonly name: string;
  readonly posology: string;
  readonly stock: number;
}
