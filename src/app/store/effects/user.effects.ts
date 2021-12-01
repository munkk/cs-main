import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  tap,
  switchMap,
  exhaustMap,
  mapTo,
  finalize,
} from 'rxjs/operators';
import { HttpStatus } from 'src/app/interfaces/http.interface';
import { UserService } from 'src/app/services/user.service';
import {
  loadUserSuccess,
  userUpdateOff,
  userUpdateOn,
} from '../actions/user.actions';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User] Load User'),
      mergeMap((payload: any) =>
        this.userService.getById(payload.id).pipe(
          map((response: any) => {
            if (response.status === HttpStatus.OK) {
              return loadUserSuccess({ user: response.user });
            }

            return null;
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User] Update User'),
      tap(() => {
        this.store.dispatch(userUpdateOn());
      }),
      mergeMap((payload: any) =>
        this.userService.update(payload.name).pipe(
          map((response: any) => {
            if (response.status === HttpStatus.OK) {
              this.toastr.success('Профиль обновлен успешно.');
              return loadUserSuccess({ user: response.user });
            }

            return null;
          }),
          catchError(() => EMPTY),
          finalize(() => this.store.dispatch(userUpdateOff()))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private store: Store,
    private toastr: ToastrService
  ) {}
}
