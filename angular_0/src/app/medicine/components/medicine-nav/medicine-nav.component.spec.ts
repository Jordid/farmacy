import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineNavComponent } from './medicine-nav.component';

describe('MedicineNavComponent', () => {
  let component: MedicineNavComponent;
  let fixture: ComponentFixture<MedicineNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
