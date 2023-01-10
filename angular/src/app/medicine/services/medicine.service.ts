import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CommonsHttpService } from 'src/app/core/services/commons/commons-http/commons-http.service';
import { ICreateMedicine, IMedicine } from '../interfaces/medicine.interface';
import { MedicineHttpService } from './medicine-http.service';
@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  protected readonly medicineSubject = new Subject<IMedicine>();
  protected readonly medicinesSubject = new Subject<IMedicine[]>();
  protected readonly deletedMedicineSubject = new Subject<boolean>();
  constructor(
    private medicineHttp: MedicineHttpService,
    private commonsHttp: CommonsHttpService,
  ) { }

  /* Get medicines. */
  public getMedicines$(): Observable<IMedicine[]> {
    return this.medicinesSubject.asObservable();
  }

  public getMedicines(params?: Params): void {
    this.medicineHttp.getMedicines$(params).subscribe({
      next: this.nextGetMedicines,
      error: this.errorGetMedicines,
    });
  }

  private nextGetMedicines = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const medicines: IMedicine[] = data.body.result;
      this.medicinesSubject.next(medicines);
    } else {
      this.medicinesSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetMedicines = (error: HttpErrorResponse): void => {
    this.medicinesSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Get medicine. */
  public getMedicine$(): Observable<IMedicine> {
    return this.medicineSubject.asObservable();
  }

  /* Get medicine. */
  public getMedicine(medicineID: string): void {
    this.medicineHttp.getMedicine$(medicineID).subscribe({
      next: this.nextGetMedicine,
      error: this.errorGetMedicine,
    });
  }

  private nextGetMedicine = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const medicine: IMedicine = data.body.result[0];
      this.medicineSubject.next(medicine);
    } else {
      this.medicineSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorGetMedicine = (error: HttpErrorResponse): void => {
    this.medicineSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Create medicine. */
  public createMedicine(medicine: ICreateMedicine): void {
    this.medicineHttp.createMedicine$(medicine).subscribe({
      next: this.nextCreateMedicine,
      error: this.errorCreateMedicine,
    });
  }

  private nextCreateMedicine = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus201(data)) {
      const medicine: IMedicine = data.body.result[0];
      this.medicineSubject.next(medicine);
    } else {
      this.medicineSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorCreateMedicine = (error: HttpErrorResponse): void => {
    this.medicineSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Update medicine. */
  public updateMedicine(medicineID: string, medicine: ICreateMedicine): void {
    this.medicineHttp.updateMedicine$(medicineID, medicine).subscribe({
      next: this.nextUpdateMedicine,
      error: this.errorUpdateMedicine,
    });
  }

  private nextUpdateMedicine = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      const medicine: IMedicine = data.body.result[0];
      this.medicineSubject.next(medicine);
    } else {
      this.medicineSubject.next(null);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorUpdateMedicine = (error: HttpErrorResponse): void => {
    this.medicineSubject.next(null);
    this.commonsHttp.errorsHttp.communication(error);
  };

  /* Delete Medicine */
  public getDeletedMedicine$(): Observable<boolean> {
    return this.deletedMedicineSubject.asObservable();
  }

  public deleteMedicine(medicineID: string): void {
      this.medicineHttp.deleteMedicine$(medicineID).subscribe({
        next: this.nextDeleteMedicine,
        error: this.errorDeleteMedicine,
      });
  }

  private nextDeleteMedicine = (data: HttpResponse<any>): void => {
    if (this.commonsHttp.validationsHttp.verifyStatus200(data)) {
      this.deletedMedicineSubject.next(true);
    } else {
      this.deletedMedicineSubject.next(false);
      this.commonsHttp.errorsHttp.apiInvalidResponse(data);
    }
  };

  private errorDeleteMedicine = (error: HttpErrorResponse): void => {
    this.deletedMedicineSubject.next(false);
    this.commonsHttp.errorsHttp.communication(error);
  };
}
