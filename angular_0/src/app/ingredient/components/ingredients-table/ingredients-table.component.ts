import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IIngredient } from '../../interfaces/ingredient.interface';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredients-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.scss']
})
export class IngredientsTableComponent  {
  @Input() ingredients: IIngredient[] = []

  constructor(private router: Router, private ingredientService: IngredientService) { }

  deleteIngredient(id: string): void {
    if (id){
      this.ingredientService.deleteIngredient(id);
    }
  }

  goToEdit(id: string): void {
    if (id){
      this.router.navigate([`/admin/ingredient/${id}/update`])
    }
  }
}
