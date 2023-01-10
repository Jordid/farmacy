import { TestBed } from '@angular/core/testing';

import { StorageUtilsService } from './storage-utils.service';

describe('StorageUtilsService', () => {
  let service: StorageUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
