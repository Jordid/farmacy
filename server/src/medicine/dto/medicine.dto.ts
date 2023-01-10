import { IngredientDTO } from 'src/ingredient/dto/ingredient.dto';

export class MedicineDTO {
  readonly expirationDate: Date;
  readonly ingredients: IngredientDTO[];
  readonly name: string;
  readonly posology: string;
  readonly stock: number;
}
