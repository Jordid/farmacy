import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMedicine } from '../../interfaces/medicine.interface';
import { MedicineService } from '../../services/medicine.service';

@Component({
  selector: 'app-medicines-table',
  templateUrl: './medicines-table.component.html',
  styleUrls: ['./medicines-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MedicinesTableComponent {
  @Input() medicines: IMedicine[] = []

  constructor(private router: Router, private medicineService: MedicineService) { }

  deleteMedicine(id: string): void {
    if (id){
      this.medicineService.deleteMedicine(id);
    }
  }
  goToAddIngredients(id: string): void {
    if (id){
      this.router.navigate([`/admin/medicine/${id}/add-ingredients`])
    }
  }

  goToEdit(id: string): void {
    if (id){
      this.router.navigate([`/admin/medicine/${id}/update`])
    }
  }
}
