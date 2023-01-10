import { Component, OnDestroy, OnInit } from '@angular/core';
import { CreateMedicineForm } from './create-medicine-form.class';

import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { delay, shareReplay } from 'rxjs/operators';
import { IIngredient } from 'src/app/ingredient/interfaces/ingredient.interface';
import { ICreateMedicine, IMedicine } from '../../interfaces/medicine.interface';
import { MedicineService } from '../../services/medicine.service';
@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrls: ['./create-medicine.component.scss']
})
export class CreateMedicineComponent extends CreateMedicineForm implements OnInit, OnDestroy {
  loading: boolean = false;
  formSent: boolean = false;

  private medicine$: Observable<IMedicine> = this.medicineService
    .getMedicine$()
    .pipe(shareReplay(1), delay(1000));

  private subs: Subscription = new Subscription();

  constructor(private medicineService: MedicineService, private router: Router) { super() }

  ngOnInit(): void {
    this.subs.add(this.medicine$.subscribe(this.getMedicine));
    this.loading = true;
    this.medicineService.getMedicines();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  cancel(): void {
    this.router.navigate(['/admin/medicine'])
  }

  createMedicine(): void {
    if (this.form.valid) {
      this.formSent = true;
      const createMedicine: ICreateMedicine = this.form.getRawValue()
      this.medicineService.createMedicine(createMedicine);
    }
  }

  public getMedicine = (medicine: IMedicine): void => {
    this.loading = false;
    this.formSent = false;
    if (medicine?._id) {
      this.router.navigate(['/admin/medicine'])
    }
  }

}
