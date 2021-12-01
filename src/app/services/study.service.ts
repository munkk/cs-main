import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

const baseUrl = `${environment.apiUrl}/study`;

@Injectable({
  providedIn: 'root',
})
export class StudyService {
  constructor(private http: HttpClient) {}

  getList(key) {
    return this.http.get(`${baseUrl}/list/${key}`);
  }
}
