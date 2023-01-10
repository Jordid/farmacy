import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitAdminPageComponent } from './pages/init-admin-page/init-admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: InitAdminPageComponent,
    children: [
      {
        path: 'medicine',
        loadChildren: () =>
          import('../medicine/medicine.module').then((m) => m.MedicineModule),
      },
      {
        path: 'ingredient',
        loadChildren: () =>
          import('../ingredient/ingredient.module').then((m) => m.IngredientModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
