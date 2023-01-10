import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MedicineDTO } from '../dto/medicine.dto';
import { IMedicine } from '../interfaces/medicine.interface';

@Injectable()
export class MedicineService {
  constructor(
    @InjectModel('Medicine') private readonly medicineModel: Model<IMedicine>,
  ) { }

  async getAll(ingredientID?: string): Promise<IMedicine[]> {
    if (ingredientID) {
      return await await this.medicineModel.find({ ingredients: ingredientID });
    }
    return await this.medicineModel.find();
  }

  async getById(medicineID: string): Promise<IMedicine> {
    return await this.medicineModel.findById(medicineID);
  }

  async create(medicine: MedicineDTO): Promise<IMedicine> {
    if (!medicine) {
      return;
    }
    const newMedicine = new this.medicineModel(medicine);
    return await newMedicine.save();
  }

  async delete(medicineID: string): Promise<IMedicine> {
    return await this.medicineModel.findByIdAndDelete(medicineID);
  }

  async update(
    medicineID: string,
    medicineDTO: MedicineDTO,
  ): Promise<IMedicine> {
    const medicine = await this.medicineModel.findByIdAndUpdate(
      medicineID,
      medicineDTO,
      { new: true },
    );
    return medicine;
  }
}
