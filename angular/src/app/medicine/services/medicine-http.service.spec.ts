import { TestBed } from '@angular/core/testing';

import { MedicineHttpService } from './medicine-http.service';

describe('MedicineHttpService', () => {
  let service: MedicineHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
