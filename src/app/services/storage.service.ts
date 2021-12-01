import { Injectable } from '@angular/core';
import * as LocalForage from 'localforage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  get(key: string): Promise<any> {
    return LocalForage.getItem(key).then(function (readValue) {
      return readValue;
    });
  }

  set(key: string, value: any, cb?: () => {}) {
    return LocalForage.setItem(key, value, cb);
  }

  remove(key: string, cb?: () => {}) {
    return LocalForage.removeItem(key, cb);
  }
}
