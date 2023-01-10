import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { SpinnersModule } from '../ui/spinners/spinners.module';
import { IngredientNavComponent } from './components/ingredient-nav/ingredient-nav.component';
import { IngredientsTableComponent } from './components/ingredients-table/ingredients-table.component';
import { IngredientRoutingModule } from './ingredient-routing.module';
import { CreateIngredientComponent } from './pages/create-ingredient/create-ingredient.component';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { InitIngredientComponent } from './pages/init-ingredient/init-ingredient.component';
import { UpdateIngredientComponent } from './pages/update-ingredient/update-ingredient.component';

@NgModule({
  declarations: [
    InitIngredientComponent,
    IngredientsComponent,
    UpdateIngredientComponent,
    CreateIngredientComponent,
    IngredientsTableComponent,
    IngredientNavComponent,
  ],
  imports: [
    CommonModule,
    IngredientRoutingModule,
    SpinnersModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'El campo es requerido' },
      ],
    }),
    FormlyBootstrapModule
  ]
})
export class IngredientModule { }
