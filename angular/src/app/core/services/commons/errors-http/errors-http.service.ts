import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorsHttpService {
  constructor(private router: Router) {}

  public communication(error: HttpErrorResponse): void {
    console.error('ERROR HTTP', error);
    this.manageError(error);
    if (
      error &&
      error.status &&
      (error.status === 401 || error.status === 403)
    ) {
      this.router.navigate([`/auth/logout`]);
    }
  }

  public apiInvalidResponse(error: any): void {
    console.error('INVALID API RESPONSE', error);
    this.manageError(error);
  }

  private manageError(error: any): void {
    // throw error;
  }

  public isControlledError(error: HttpErrorResponse, code?: string): boolean {
    if (
      error?.ok === false &&
      error?.status === 400 &&
      error?.error?.errors?.length &&
      error?.error?.errors[0]?.hasOwnProperty('code')
    ) {
      if (code) {
        return error?.error?.errors[0]?.code === code ? true : false;
      }
      return true;
    } else {
      return false;
    }
  }
}
