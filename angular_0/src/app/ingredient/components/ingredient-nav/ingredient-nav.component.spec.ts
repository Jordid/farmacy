import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientNavComponent } from './ingredient-nav.component';

describe('IngredientNavComponent', () => {
  let component: IngredientNavComponent;
  let fixture: ComponentFixture<IngredientNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
