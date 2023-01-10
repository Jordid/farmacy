import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationsHttpService {
  constructor() {}

  private verifyAllResponses(response: HttpResponse<any>): boolean {
    if (response && response.status && response.ok && response.ok === true) {
      return true;
    } else {
      return false;
    }
  }

  private verifyResultResponses(response: HttpResponse<any>): boolean {
    if (
      this.verifyAllResponses(response) &&
      response.body &&
      response.body.result !== undefined
    ) {
      return true;
    } else {
      return false;
    }
  }

  public verifyStatus200(response: HttpResponse<any>): boolean {
    if (this.verifyResultResponses(response) && response.status === 200) {
      return true;
    } else {
      return false;
    }
  }

  public verifyStatus201(response: HttpResponse<any>): boolean {
    if (this.verifyResultResponses(response) && response.status === 201) {
      return true;
    } else {
      return false;
    }
  }

  public verifyStatus204(response: HttpResponse<any>): boolean {
    if (this.verifyAllResponses(response) && response.status === 204) {
      return true;
    } else {
      return false;
    }
  }
}
