import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiFarmacyEnv } from 'src/app/core/config/apis/api-farmacy/api-farmacy.config';
import { ICreateMedicine, IUpdateMedicine } from '../interfaces/medicine.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicineHttpService {

  constructor(private http: HttpClient) { }

  public createMedicine$(medicine: ICreateMedicine): Observable<HttpResponse<any>> {
    const url = `${ApiFarmacyEnv.baseUrl}/medicine`;
    return this.http.post(url, medicine, { observe: 'response' });
  }

  public getMedicines$(params?: Params): Observable<HttpResponse<any>> {
    const url = `${ApiFarmacyEnv.baseUrl}/medicine`;
    return this.http.get(url, { observe: 'response', params });
  }

  public getMedicine$(medicineID: string): Observable<HttpResponse<any>> {
    const url = `${ApiFarmacyEnv.baseUrl}/medicine/${medicineID}`;
    return this.http.get(url, { observe: 'response' });
  }

  public updateMedicine$(medicineID: string, medicine: IUpdateMedicine): Observable<HttpResponse<any>> {
    const url = `${ApiFarmacyEnv.baseUrl}/medicine/${medicineID}`;
    return this.http.patch(url, medicine, { observe: 'response' });
  }

  public deleteMedicine$(medicineID: string): Observable<HttpResponse<any>> {
    const url = `${ApiFarmacyEnv.baseUrl}/medicine/${medicineID}`;
    return this.http.delete(url, { observe: 'response' });
  }
}
