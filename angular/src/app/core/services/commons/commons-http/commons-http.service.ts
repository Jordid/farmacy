import { Injectable } from '@angular/core';
import { ErrorsHttpService } from '../errors-http/errors-http.service';
import { ValidationsHttpService } from '../validations-http/validations-http.service';

@Injectable({
  providedIn: 'root',
})
export class CommonsHttpService {
  constructor(
    public validationsHttp: ValidationsHttpService,
    public errorsHttp: ErrorsHttpService
  ) {}
}
