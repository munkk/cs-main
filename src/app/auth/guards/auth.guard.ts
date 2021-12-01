import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        if (!user) {
          this.router.navigateByUrl('/');
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
