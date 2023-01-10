import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, shareReplay, Subscription } from 'rxjs';
import { ICreateIngredient, IIngredient } from '../../interfaces/ingredient.interface';
import { IngredientService } from '../../services/ingredient.service';
import { IngredientForm } from './ingredient-form.class';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.scss']
})
export class CreateIngredientComponent extends IngredientForm implements OnInit, OnDestroy {
  loading: boolean = false;
  formSent: boolean = false;

  private ingredient$: Observable<IIngredient> = this.ingredientService
    .getIngredient$()
    .pipe(shareReplay(1), delay(1000));

  private subs: Subscription = new Subscription();

  constructor(private ingredientService: IngredientService, private router: Router) { super() }

  ngOnInit(): void {
    this.subs.add(this.ingredient$.subscribe(this.getIngredient));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  cancel(): void {
    this.router.navigate(['/admin/ingredient'])
  }

  createMedicine(): void {
    if (this.form.valid) {
      this.formSent = true;
      const createIngredient: ICreateIngredient = this.form.getRawValue()
      this.ingredientService.createIngredient(createIngredient);
    }
  }

  public getIngredient = (ingredient: IIngredient): void => {
    this.loading = false;
    this.formSent = false;
    if (ingredient?._id) {
      this.router.navigate(['/admin/ingredient'])
    }
  }

}
