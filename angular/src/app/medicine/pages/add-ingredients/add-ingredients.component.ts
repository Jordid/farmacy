import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, shareReplay, Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IIngredient } from 'src/app/ingredient/interfaces/ingredient.interface';
import { IngredientService } from 'src/app/ingredient/services/ingredient.service';
import { IMedicine } from '../../interfaces/medicine.interface';
import { MedicineService } from '../../services/medicine.service';

@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.scss'],
})
export class AddIngredientsComponent implements OnInit, OnDestroy {
  private hasMedicineID: boolean = this.route.snapshot.paramMap.has('medicineID');
  private medicineID: string = this.route.snapshot.paramMap.get('medicineID');

  medicine: IMedicine;
  ingredients: IIngredient[];

  formSent: boolean = false;
  selectedIngredientID: string;
  selecetedIngredients: IIngredient[] = [];
  gettingMedicine: boolean = false;
  gettingIngredients: boolean = false;

  private medicine$: Observable<IMedicine> = this.medicineService
    .getMedicine$()
    .pipe(shareReplay(1), delay(1000));

  private ingredients$: Observable<IIngredient[]> = this.ingredientService
    .getIngredients$()
    .pipe(shareReplay(1), delay(1000));

  private subs: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private medicineService: MedicineService,
    private ingredientService: IngredientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subs.add(this.medicine$.subscribe(this.getMedicine));
    this.subs.add(this.ingredients$.subscribe(this.getIngredients));
    if (this.hasMedicineID) {
      this.gettingIngredients = true;
      this.ingredientService.getIngredients();
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getMedicine = (medicine: IMedicine): void => {
    this.medicine = medicine;
    this.gettingMedicine = false;
    if (this.formSent) {
      this.formSent = false;
      this.router.navigate(['/admin/medicine']);
      return;
    } else {
      this.setMedicineIngredients();
    }
  };

  /* Take medicine ingrdient ids to push ingredients in selected ingredients list. */
  setMedicineIngredients(): void {
    this.selecetedIngredients = [];
    if (this.medicine?.ingredients?.length) {
      this.medicine.ingredients.forEach(mi => {
        const foundIngredient = this.ingredients.find(i => i._id === mi);
        if (foundIngredient) {
          this.selecetedIngredients.push(foundIngredient);
        }
      })
    }
  }

  private getIngredients = (ingredients: IIngredient[]): void => {
    this.ingredients = ingredients;
    this.gettingIngredients = false;
    this.gettingMedicine = true;
    this.medicineService.getMedicine(this.medicineID);
  };

  cancel(): void {
    this.router.navigate(['/admin/medicine']);
  }

  onIngredientChange(ingredientID: string): void {
    this.selectedIngredientID = ingredientID;
  }

  /* Add ingredient from select to selected ingredients list. */
  addIngedient(): void {
    if (this.selectedIngredientID) {
      const foundOnSelected = this.selecetedIngredients.find(
        (i) => i._id === this.selectedIngredientID
      );
      if (!foundOnSelected) {
        const foundOnIngredients = this.ingredients.find(
          (i) => i._id === this.selectedIngredientID
        );
        if (foundOnIngredients) {
          this.selecetedIngredients.push(foundOnIngredients);
        }
      }
    }
  }

  /* Remove a ingredient from selected ingredients list */
  removeIngredient(id: string): void {
    if (id && this.selecetedIngredients) {
      const objWithIdIndex = this.selecetedIngredients.findIndex(
        (obj) => obj._id === id
      );
      if (objWithIdIndex > -1) {
        this.selecetedIngredients.splice(objWithIdIndex, 1);
      }
    }
  }

  /* Update medicine with selected ingredients. */
  save(): void {
    if (this.medicine?._id) {
      this.formSent = true;
      this.medicine.ingredients = this.selecetedIngredients.map(i=>i._id);
      this.medicineService.updateMedicine(this.medicine?._id, this.medicine);
    }
  }
}
