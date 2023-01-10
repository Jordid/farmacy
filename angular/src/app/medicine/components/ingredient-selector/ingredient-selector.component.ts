import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IIngredient } from 'src/app/ingredient/interfaces/ingredient.interface';

@Component({
  selector: 'app-ingredient-selector',
  templateUrl: './ingredient-selector.component.html',
  styleUrls: ['./ingredient-selector.component.scss'],
})
export class IngredientSelectorComponent implements OnInit, OnDestroy {
  @Input() ingredients: IIngredient[];
  @Input() addQueryParam: boolean = true;
  @Output() selectedIngredient = new EventEmitter<string>();

  private fb: FormBuilder = new FormBuilder();
  private expirationSkeleton = {
    ingredientID: [null, Validators.required],
  };

  form: FormGroup = this.fb.group(this.expirationSkeleton);
  private subs: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subs.add(
      this.ingredientID.valueChanges.subscribe(this.getIngredientID)
    );
    this.subs.add(this.route.queryParamMap.subscribe(this.getQueryParamMap));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getQueryParamMap = (queryParamMap: ParamMap): void => {
    const ingredientID = 'ingredientID'
    if (queryParamMap.has(ingredientID) && queryParamMap.get(ingredientID).trim()) {
      const ingredientIdValue = queryParamMap.get(ingredientID).trim();
      this.ingredientID.setValue(ingredientIdValue);
    } else {
      this.ingredientID.setValue('');
    }
  }

  public getIngredientID = (ingredienID: string): void => {
    this.selectedIngredient.emit(ingredienID)

    if (this.addQueryParam) {
      const queryParams: Params = { ...this.route.snapshot.queryParams };
      if (this.ingredientID.value) {
        queryParams['ingredientID'] = this.ingredientID.value;
      } else {
        delete queryParams['ingredientID'];
      }
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams,
      });
    }
  };

  get ingredientID(): AbstractControl {
    return this.getControlByName('ingredientID');
  }

  getControlByName(controlName: string): AbstractControl {
    let control: any;
    if (controlName && this.form?.controls) {
      control = this.form.get(controlName);
    }
    return control;
  }
}
