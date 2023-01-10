export interface IIngredient {
  _id: string;
  name: string;
  createdAt: string;
}
export interface ICreateIngredient {
  name: string
}
export interface IUpdateIngredient extends ICreateIngredient {
}
