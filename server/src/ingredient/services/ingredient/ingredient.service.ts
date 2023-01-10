import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IngredientDTO } from 'src/ingredient/dto/ingredient.dto';
import { IIngredient } from 'src/ingredient/interfaces/ingredient.interface';

@Injectable()
export class IngredientService {
  constructor(
    @InjectModel('Ingredient')
    private readonly ingredientModel: Model<IIngredient>,
  ) {}

  async getAll(): Promise<IIngredient[]> {
    return await this.ingredientModel.find();
  }

  async getById(ingredientID: string): Promise<IIngredient> {
    return await this.ingredientModel.findById(ingredientID);
  }

  async create(ingredient: IngredientDTO): Promise<IIngredient> {
    const newIngredient = new this.ingredientModel(ingredient);
    return await newIngredient.save();
  }

  async delete(ingredientID: string): Promise<IIngredient> {
    return await this.ingredientModel.findByIdAndDelete(ingredientID);
  }

  async update(
    ingredientID: string,
    ingredientDTO: IngredientDTO,
  ): Promise<IIngredient> {
    const ingredient = await this.ingredientModel.findByIdAndUpdate(
      ingredientID,
      ingredientDTO,
      { new: true },
    );
    return ingredient;
  }
}
