import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { take, map, switchMap, tap, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Chapter } from '../classes/chapter';
import { StorageService } from './storage.service';
import { User } from '../interfaces/user.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private storage: StorageService,
    private http: HttpClient,
    private router: Router
  ) {}

  getById(id) {
    return this.http.get(`${environment.apiUrl}/user/${id}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${environment.apiUrl}/users`)
      .pipe(take(1), shareReplay(1));
  }

  update(name: string) {
    return this.http.post(`${environment.apiUrl}/user/update`, { name });
  }

  removeUser(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`).pipe(take(1));
  }

  getAllChapters(language: string): Observable<Chapter[]> {
    return this.http
      .get<Chapter[]>(`${environment.apiUrl}/chapters/${language}`)
      .pipe(take(1));
  }

  getContent$ = this.http.get('assets/english.json').pipe(
    tap((response) => console.log(JSON.stringify(response))),
    shareReplay(1)
  );
}
