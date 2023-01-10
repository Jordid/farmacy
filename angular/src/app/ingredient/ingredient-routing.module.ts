import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateIngredientComponent } from './pages/create-ingredient/create-ingredient.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { InitIngredientComponent } from './pages/init-ingredient/init-ingredient.component';
import { UpdateIngredientComponent } from './pages/update-ingredient/update-ingredient.component';

const routes: Routes = [
  {
    path: '',
    component: InitIngredientComponent,
    children: [
      {
        path: '',
        component: IngredientsComponent,
      },
      {
        path: 'create',
        component: CreateIngredientComponent,
      },
      {
        path: ':ingredientID/update',
        component: UpdateIngredientComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientRoutingModule { }
