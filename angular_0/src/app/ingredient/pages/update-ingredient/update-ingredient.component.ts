import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, Observable, shareReplay, Subscription } from 'rxjs';
import { IIngredient, IUpdateIngredient } from '../../interfaces/ingredient.interface';
import { IngredientService } from '../../services/ingredient.service';
import { IngredientForm } from '../create-ingredient/ingredient-form.class';

@Component({
  selector: 'app-update-ingredient',
  templateUrl: './update-ingredient.component.html',
  styleUrls: ['./update-ingredient.component.scss']
})
export class UpdateIngredientComponent extends IngredientForm implements OnInit, OnDestroy {
  private hasIngredientID: boolean = this.route.snapshot.paramMap.has('ingredientID');
  private ingredientID: string = this.route.snapshot.paramMap.get('ingredientID');

  loading: boolean = false;
  formSent: boolean = false;

  private ingredient$: Observable<IIngredient> = this.ingredientService
    .getIngredient$()
    .pipe(shareReplay(1), delay(1000));

  private subs: Subscription = new Subscription();

  constructor(private route: ActivatedRoute,
    private ingredientService: IngredientService, private router: Router) { super() }

  ngOnInit(): void {
    this.subs.add(this.ingredient$.subscribe(this.getIngredient));
    if (this.hasIngredientID) {
      this.ingredientService.getIngredient(this.ingredientID);
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  cancel(): void {
    this.router.navigate(['/admin/ingredient'])
  }

  updateIngredient(): void {
    if (this.form.valid && this.hasIngredientID) {
      this.formSent = true;
      const updateIngredient: IUpdateIngredient = this.form.getRawValue();
      this.submitting = true;
      this.ingredientService.updateIngredient(this.ingredientID, updateIngredient);
    }
  }

  public getIngredient = (ingredient: IIngredient): void => {
    this.loading = false;
    this.name.setValue(ingredient?.name);
    if (ingredient?._id && this.formSent) {
      this.router.navigate(['/admin/ingredient'])
    }
    this.formSent = false;
  }

}
