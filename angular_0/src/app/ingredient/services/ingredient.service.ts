import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CommonsHttpService } from 'src/app/core/services/commons/commons-http/commons-http.service';
import { ICreateIngredient, IIngredient, IUpdateIngredient } from '../interfaces/ingredient.interface';
import { IngredientHttpService } from './ingredient-http.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  protected readonly ingredientsSubject = new Subject<IIngredient[]>();
  protected readonly ingredientSubject = new Subject<IIngredient>();
  protected readonly deletedIngredientSubject = new Subject<boolean>();
  constructor(
    private ingredientHttp: IngredientHttpService,
    private commonsHttp: CommonsHttpService,
  ) { }

  /* Get ingredients. */
  public getIngredients$(): Observable<IIngredient[]> {
    return this.ingredientsSubject.asObservable();
  }

  public getIngredients(params?: Params): void {
    this.ingredientHttp.getIngredients$(params).subscribe({
      next: this.nextGetIngredients,
      error: this.errorGetIngredients,
    });
  }

  private nextGetIngredients = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const ingredients: IIngredient[] = data.body.result;
      this.ingredientsSubject.next(ingredients);
    } else {
      this.ingredientsSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetIngredients = (error: HttpErrorResponse): void => {
    this.ingredientsSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Get ingredient. */
  public getIngredient$(): Observable<IIngredient> {
    return this.ingredientSubject.asObservable();
  }

  public getIngredient(ingredientID: string): void {
    this.ingredientHttp.getIngredient$(ingredientID).subscribe({
      next: this.nextGetIngredient,
      error: this.errorGetIngredient,
    });
  }

  private nextGetIngredient = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const ingredient: IIngredient = data.body.result[0];
      this.ingredientSubject.next(ingredient);
    } else {
      this.ingredientSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetIngredient = (error: HttpErrorResponse): void => {
    this.ingredientSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Create ingredient. */
  public createIngredient(ingredient: ICreateIngredient): void {
    this.ingredientHttp.createIngredient$(ingredient).subscribe({
      next: this.nextCreateIngredient,
      error: this.errorCreateIngredient,
    });
  }

  private nextCreateIngredient = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus201(data)) {
      const ingredient: IIngredient = data.body.result[0];
      this.ingredientSubject.next(ingredient);
    } else {
      this.ingredientSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorCreateIngredient = (error: HttpErrorResponse): void => {
    this.ingredientSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Update ingredient. */
  public updateIngredient(ingredientID: string, ingredient: IUpdateIngredient): void {
    this.ingredientHttp.updateIngredient$(ingredientID, ingredient).subscribe({
      next: this.nextUpdateIngredient,
      error: this.errorUpdateIngredient,
    });
  }

  private nextUpdateIngredient = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const ingerdient: IIngredient = data.body.result[0];
      this.ingredientSubject.next(ingerdient);
    } else {
      this.ingredientSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorUpdateIngredient = (error: HttpErrorResponse): void => {
    this.ingredientSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Delete ingredient */
  public getDeletedIngredient$(): Observable<boolean> {
    return this.deletedIngredientSubject.asObservable();
  }

  public deleteIngredient(ingredientID: string): void {
      this.ingredientHttp.deleteIngredient$(ingredientID).subscribe({
        next: this.nextDeleteIngredient,
        error: this.errorDeleteIngredient,
      });
  }

  private nextDeleteIngredient = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      this.deletedIngredientSubject.next(true);
    } else {
      this.deletedIngredientSubject.next(false);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorDeleteIngredient = (error: HttpErrorResponse): void => {
    this.deletedIngredientSubject.next(false);
    this.commonsHttp.errorsHttp.communication(error);
  };
}
