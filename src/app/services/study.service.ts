import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const baseUrl = `${environment.apiUrl}/study`;

@Injectable({
  providedIn: 'root',
})
export class StudyService {
  constructor(private http: HttpClient) {}

  getList(key) {
    return this.http.get(`../../assets/data/${key}.json`);
    //return this.http.get(`${baseUrl}/list/${key}`);
  }
}
