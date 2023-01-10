import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorsHttpService } from './errors-http.service';

describe('ErrorsHttpService', () => {
  let service: ErrorsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatSnackBarModule],
    });
    service = TestBed.inject(ErrorsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
