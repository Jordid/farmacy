import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitAdminPageComponent } from './init-admin-page.component';

describe('InitAdminPageComponent', () => {
  let component: InitAdminPageComponent;
  let fixture: ComponentFixture<InitAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
