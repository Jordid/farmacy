import {
  Controller,
  Post,
  Res,
  Body,
  HttpStatus,
  Get,
  Param,
  Delete,
  NotFoundException,
  Patch,
} from '@nestjs/common';
import { IngredientDTO } from 'src/ingredient/dto/ingredient.dto';
import { IngredientService } from 'src/ingredient/services/ingredient/ingredient.service';
@Controller('ingredient')
export class IngredientController {
  constructor(private ingredientService: IngredientService) {}

  @Post('/')
  async create(@Res() res, @Body() ingredientDTO: IngredientDTO) {
    const ingredient = await this.ingredientService.create(ingredientDTO);
    return res.status(HttpStatus.CREATED).json({
      message: 'Ingredient created successfully',
      result: [ingredient],
    });
  }

  @Get('/')
  async getAll(@Res() res) {
    const ingredients = await this.ingredientService.getAll();
    return res.status(HttpStatus.OK).json({
      message: 'Ok',
      result: ingredients,
    });
  }

  @Get('/:ingredientID')
  async getById(@Res() res, @Param('ingredientID') ingredientID: string) {
    const ingredient = await this.ingredientService.getById(ingredientID);
    if (!ingredient) {
      throw new NotFoundException('The ingredient does not exists.');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Ok',
      result: [ingredient],
    });
  }

  @Delete('/:ingredientID')
  async delete(@Res() res, @Param('ingredientID') ingredientID: string) {
    const ingredient = await this.ingredientService.delete(ingredientID);
    if (!ingredient) {
      throw new NotFoundException('The ingredient does not exists.');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Ok',
      result: [ingredient],
    });
  }

  @Patch('/:ingredientID')
  async update(
    @Res() res,
    @Param('ingredientID') ingredientID: string,
    @Body() ingredientDTO: IngredientDTO,
  ) {
    const ingredient = await this.ingredientService.update(
      ingredientID,
      ingredientDTO,
    );
    if (!ingredient) {
      throw new NotFoundException('The ingredient does not exists.');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Ok',
      result: [ingredient],
    });
  }
}
