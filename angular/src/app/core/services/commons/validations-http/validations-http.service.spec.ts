import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ValidationsHttpService } from './validations-http.service';

describe('ValidationsHttpService', () => {
  let service: ValidationsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ValidationsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
