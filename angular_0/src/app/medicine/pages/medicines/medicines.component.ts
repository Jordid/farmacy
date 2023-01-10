import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { delay, shareReplay } from 'rxjs/operators';
import { IIngredient } from 'src/app/ingredient/interfaces/ingredient.interface';
import { IngredientService } from 'src/app/ingredient/services/ingredient.service';
import { IMedicine } from '../../interfaces/medicine.interface';
import { MedicineService } from '../../services/medicine.service';
@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss']
})
export class MedicinesComponent implements OnInit, OnDestroy {
  ingredients: IIngredient[];
  medicines: IMedicine[] = [];
  loading: boolean = false;
  removedMedicine: boolean = false;

  private deletedMedicine$: Observable<boolean> = this.medicineService
    .getDeletedMedicine$()
    .pipe(shareReplay(1));

  private ingredients$: Observable<IIngredient[]> = this.ingredientService
    .getIngredients$()
    .pipe(shareReplay(1));

  private medicines$: Observable<IMedicine[]> = this.medicineService
    .getMedicines$()
    .pipe(shareReplay(1), delay(1000));

  private subs: Subscription = new Subscription();

  constructor(private medicineService: MedicineService, private route: ActivatedRoute, private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.subs.add(this.ingredients$.subscribe(this.getIngredients));
    this.ingredientService.getIngredients();
    this.subs.add(this.route.queryParamMap.subscribe(this.getQueryParamMap));
    this.subs.add(this.medicines$.subscribe(this.getMedicines));
    this.subs.add(this.deletedMedicine$.subscribe(this.deletedMedicine));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getIngredients = (ingredients: IIngredient[]): void => {
    this.ingredients = ingredients;
  }

  public getQueryParamMap = (queryParamMap: ParamMap): void => {
    const queryParams: Params = {};
    if (queryParamMap.keys.length) {
      for (const key of queryParamMap.keys) {
        const value = queryParamMap.get(key)
        if (value != 'ALL') {
          queryParams[key] = value;
        }
      }
    }
    this.loading = true;
    this.medicineService.getMedicines(queryParams);
  };

  public getMedicines = (medicines: IMedicine[]): void => {
    this.medicines = medicines;
    this.loading = false;
    this.removedMedicine = false;
  };

  public deletedMedicine = (deleted: boolean): void => {
    if (deleted) {
      this.removedMedicine = true;
      this.loading = true;
      this.medicineService.getMedicines();
    }
  };
}
