import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import dayjs from 'dayjs';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import {
  AuthCredentialsDto,
  AuthRegisterDto,
} from '../interfaces/auth.iterface';
import { StorageService } from '../services/storage.service';
import { timeConverter } from '../utils/common';

const helper = new JwtHelperService();
export const JWT_TOKEN = 'JWT_TOKEN';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';

export interface JWTUser {
  sub: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user!: Observable<JWTUser>;
  private userData = new BehaviorSubject(null);

  constructor(
    private storage: StorageService,
    private http: HttpClient,
    private router: Router
  ) {
    this.loadStoredToken();
  }

  getJwtToken(): Promise<string> {
    return this.storage.get(JWT_TOKEN);
  }

  getRefreshToken() {
    return this.storage.get(REFRESH_TOKEN);
  }

  loadStoredToken() {
    this.user = from(
      this.storage.get(JWT_TOKEN).then((token: any) => {
        if (token) {
          let decoded = helper.decodeToken(token);
          this.userData.next(decoded);
          return decoded;
        } else {
          return null;
        }
      })
    );
  }

  refreshToken() {
    //TODO: Implement refresh

    return this.http
      .post<any>(`${environment.apiUrl}/refresh`, {
        refreshToken: this.getRefreshToken(),
      })
      .pipe(
        tap((token) => {
          // this.storeJwtToken(tokens.jwt);
        })
      );
  }

  register(credentials: AuthRegisterDto) {
    return this.http
      .post(`${environment.apiUrl}/auth/register`, credentials)
      .pipe(
        take(1),
        map((res) => {
          return res;
        })
      );
  }

  login(credentials: AuthCredentialsDto) {
    return this.http.post(`${environment.apiUrl}/auth/login`, credentials).pipe(
      take(1),
      map((res: any) => {
        return res['token'];
      }),
      switchMap((token) => {
        let decoded = helper.decodeToken(token);

        this.userData.next(decoded);
        let storageObs = from(this.storage.set(JWT_TOKEN, token));
        return storageObs;
      })
    );
  }

  logout() {
    this.storage.remove(JWT_TOKEN).then(() => {
      this.router.navigateByUrl('/');
      this.userData.next(null);
    });
  }
}
