import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinePreviewComponent } from './medicine-preview.component';

describe('MedicinePreviewComponent', () => {
  let component: MedicinePreviewComponent;
  let fixture: ComponentFixture<MedicinePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicinePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
