import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageUtilsService {
  constructor() {}

  /**
   * Return if the browser support Local Storage.
   */
  public validateLocalStorage = (): boolean => {
    if (typeof Storage !== 'undefined' && window.localStorage) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * validateInLocalStorage
   * Return if browser support Local Storage and lsKey exist inside Local Storage
   * @param lsKey - Key of the model in Local Storage
   */
  public validateInLocalStorage(lsKey: string): boolean {
    if (
      this.validateLocalStorage &&
      localStorage.length &&
      localStorage.getItem(lsKey)
    ) {
      return true;
    } else {
      return false;
    }
  }
}
