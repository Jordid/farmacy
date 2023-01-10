import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonsHttpService } from './commons-http.service';

describe('CommonsHttpService', () => {
  let service: CommonsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatSnackBarModule],
    });
    service = TestBed.inject(CommonsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
