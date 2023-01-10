import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitIngredientComponent } from './init-ingredient.component';

describe('InitIngredientComponent', () => {
  let component: InitIngredientComponent;
  let fixture: ComponentFixture<InitIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
