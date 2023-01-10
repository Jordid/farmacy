import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiFarmacyEnv } from 'src/app/core/config/apis/api-farmacy/api-farmacy.config';
import { ICreateIngredient, IUpdateIngredient } from '../interfaces/ingredient.interface';

@Injectable({
  providedIn: 'root'
})
export class IngredientHttpService {

  constructor(private http: HttpClient) { }

  public createIngredient$(ingredient: ICreateIngredient): Observable<HttpResponse<any>> {
    const url = `${ApiFarmacyEnv.baseUrl}/ingredient`;
    return this.http.post(url, ingredient, { observe: 'response' });
  }

  public getIngredients$(params?: Params): Observable<HttpResponse<any>> {
    const url = `${ApiFarmacyEnv.baseUrl}/ingredient`;
    return this.http.get(url, { observe: 'response', params });
  }

  public getIngredient$(ingredientID: string): Observable<HttpResponse<any>> {
    const url = `${ApiFarmacyEnv.baseUrl}/ingredient/${ingredientID}`;
    return this.http.get(url, { observe: 'response' });
  }

  public updateIngredient$(ingredientID: string, ingredient: IUpdateIngredient): Observable<HttpResponse<any>> {
    const url = `${ApiFarmacyEnv.baseUrl}/ingredient/${ingredientID}`;
    return this.http.patch(url, ingredient, { observe: 'response' });
  }

  public deleteIngredient$(ingredientID: string): Observable<HttpResponse<any>> {
    const url = `${ApiFarmacyEnv.baseUrl}/ingredient/${ingredientID}`;
    return this.http.delete(url, { observe: 'response' });
  }
}
