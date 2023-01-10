import { Document } from "mongoose";

export interface IIngredient extends Document {
  readonly _id: string;
  readonly createdAt: Date;
  readonly name: string;
}
