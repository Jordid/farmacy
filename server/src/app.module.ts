import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientModule } from './ingredient/ingredient.module';
import { MedicineModule } from './medicine/medicine.module';

@Module({
  imports: [
    MedicineModule,
    IngredientModule,
    MongooseModule.forRoot(
      'mongodb+srv://adminfarmacy:9YwiBJW1HAmMXWy3@cluster0.sqja3nd.mongodb.net/test',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
