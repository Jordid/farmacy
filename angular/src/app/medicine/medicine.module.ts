import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { DatePickersModule } from '../ui/date-pickers/date-pickers.module';
import { SpinnersModule } from '../ui/spinners/spinners.module';
import { MedicineNavComponent } from './components/medicine-nav/medicine-nav.component';
import { MedicinesTableComponent } from './components/medicines-table/medicines-table.component';
import { MedicineRoutingModule } from './medicine-routing.module';
import { CustomAdapter, CustomDateParserFormatter, DatePickerComponent } from './components/date-picker/date-picker.component';
import { CreateMedicineComponent } from './pages/create-medicine/create-medicine.component';
import { InitMedicineComponent } from './pages/init-medicine/init-medicine.component';
import { MedicinesComponent } from './pages/medicines/medicines.component';
import { UpdateMedicineComponent } from './pages/update-medicine/update-medicine.component';
import { IngredientSelectorComponent } from './components/ingredient-selector/ingredient-selector.component';
import { AddIngredientsComponent } from './pages/add-ingredients/add-ingredients.component';
import { MedicinePreviewComponent } from './components/medicine-preview/medicine-preview.component';
@NgModule({
  declarations: [
    CreateMedicineComponent,
    InitMedicineComponent,
    MedicineNavComponent,
    MedicinesComponent,
    MedicinesTableComponent,
    UpdateMedicineComponent,
    DatePickerComponent,
    IngredientSelectorComponent,
    AddIngredientsComponent,
    MedicinePreviewComponent,
  ],
  imports: [
    NgbDatepickerModule,
    CommonModule,
    MedicineRoutingModule,
    SpinnersModule,
    DatePickersModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'El campo es requerido' },
      ],
    }),
    FormlyBootstrapModule
  ],
  providers: [
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class MedicineModule { }
