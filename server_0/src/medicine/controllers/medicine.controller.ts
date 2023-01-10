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
  Query
} from '@nestjs/common';
import { MedicineDTO } from '../dto/medicine.dto';
import { MedicineService } from '../services/medicine.service';

@Controller('medicine')
export class MedicineController {
  constructor(private medicineService: MedicineService) {}

  @Post('/')
  async create(@Res() res, @Body() medicineDTO: MedicineDTO) {
    const medicine = await this.medicineService.create(medicineDTO);
    return res.status(HttpStatus.CREATED).json({
      message: 'Medicine created successfully',
      result: [medicine],
    });
  }

  @Get('/')
  async getAll(@Res() res, @Query('ingredientID') ingredientID: string) {
    const medicines = await this.medicineService.getAll(ingredientID);
    return res.status(HttpStatus.OK).json({
      message: 'Ok',
      result: medicines,
    });
  }

  @Get('/:medicineID')
  async getById(@Res() res, @Param('medicineID') medicineID: string) {
    const medicine = await this.medicineService.getById(medicineID);
    if (!medicine) {
      throw new NotFoundException('The medicine does not exists.');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Ok',
      result: [medicine],
    });
  }

  @Delete('/:medicineID')
  async delete(@Res() res, @Param('medicineID') medicineID: string) {
    const medicine = await this.medicineService.delete(medicineID);
    if (!medicine) {
      throw new NotFoundException('The medicine does not exists.');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Ok',
      result: [medicine],
    });
  }

  @Patch('/:medicineID')
  async update(
    @Res() res,
    @Param('medicineID') medicineID: string,
    @Body() medicineDTO: MedicineDTO,
  ) {
    const medicine = await this.medicineService.update(medicineID, medicineDTO);
    if (!medicine) {
      throw new NotFoundException('The medicine does not exists.');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Ok',
      result: [medicine],
    });
  }
}
