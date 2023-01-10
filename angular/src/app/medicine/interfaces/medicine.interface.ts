import { IIngredient } from "src/app/ingredient/interfaces/ingredient.interface";

export interface IMedicine {
  _id: string;
  createdAt: string;
  expirationDate: string;
  ingredients: string[];
  name: string;
  posology: string;
  stock: number;
}

export interface ICreateMedicine {
  expirationDate: string;
  ingredients: string[];
  name: string;
  posology: string;
  stock: number;
}

export interface IUpdateMedicine extends ICreateMedicine {
}
