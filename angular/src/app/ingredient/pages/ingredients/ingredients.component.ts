import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, shareReplay, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IIngredient } from '../../interfaces/ingredient.interface';
import { IngredientService } from '../../services/ingredient.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit, OnDestroy {
  ingredients: IIngredient[];
  loading: boolean = false;
  removedIngredient: boolean = false;

  private deletedIngredient$: Observable<boolean> = this.ingredientService
    .getDeletedIngredient$()
    .pipe(shareReplay(1));

  private ingredients$: Observable<IIngredient[]> = this.ingredientService
    .getIngredients$()
    .pipe(shareReplay(1), delay(1000));

  private subs: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.subs.add(this.ingredients$.subscribe(this.getIngredients));
    this.subs.add(this.route.queryParamMap.subscribe(this.getQueryParamMap));
    this.subs.add(this.deletedIngredient$.subscribe(this.deletedIngredient));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getIngredients = (ingredients: IIngredient[]): void => {
    this.ingredients = ingredients;
    this.loading = false;
    this.removedIngredient = false;
  }

  public getQueryParamMap = (queryParamMap: ParamMap): void => {
    const queryParams: Params = {};
    if (queryParamMap.keys.length) {
      for (const key of queryParamMap.keys) {
        const value = queryParamMap.get(key)
        queryParams[key] = value;
      }
    }
    this.loading = true;
    this.ingredientService.getIngredients(queryParamMap);
  };

  public deletedIngredient = (deleted: boolean): void => {
    if (deleted) {
      this.removedIngredient = true;
      this.loading = true;
      this.ingredientService.getIngredients();
    }
  };
}
