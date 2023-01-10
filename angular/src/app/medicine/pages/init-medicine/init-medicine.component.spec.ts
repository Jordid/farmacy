import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitMedicineComponent } from './init-medicine.component';

describe('InitMedicineComponent', () => {
  let component: InitMedicineComponent;
  let fixture: ComponentFixture<InitMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitMedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
