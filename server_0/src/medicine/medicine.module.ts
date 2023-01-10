import { Module } from '@nestjs/common';
import { MedicineController } from './controllers/medicine.controller';
import { MedicineService } from './services/medicine.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MedicineSchema } from './schemas/medicine.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Medicine', schema: MedicineSchema }]),
  ],
  controllers: [MedicineController],
  providers: [MedicineService],
})
export class MedicineModule { }
