import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IngredientController } from './controllers/ingredient/ingredient.controller';
import { IngredientSchema } from './schemas/ingredient.schema';
import { IngredientService } from './services/ingredient/ingredient.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Ingredient', schema: IngredientSchema },
    ]),
  ],
  controllers: [IngredientController],
  providers: [IngredientService],
})
export class IngredientModule { }
