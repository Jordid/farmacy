import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddIngredientsComponent } from './pages/add-ingredients/add-ingredients.component';
import { CreateMedicineComponent } from './pages/create-medicine/create-medicine.component';
import { InitMedicineComponent } from './pages/init-medicine/init-medicine.component';
import { MedicinesComponent } from './pages/medicines/medicines.component';
import { UpdateMedicineComponent } from './pages/update-medicine/update-medicine.component';

const routes: Routes = [
  {
    path: '',
    component: InitMedicineComponent,
    children: [
      {
        path: '',
        component: MedicinesComponent,
      },
      {
        path: 'create',
        component: CreateMedicineComponent,
      },
      {
        path: ':medicineID/update',
        component: UpdateMedicineComponent,
      },
      {
        path: ':medicineID/add-ingredients',
        component: AddIngredientsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicineRoutingModule { }
