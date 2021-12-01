import { createAction, props } from '@ngrx/store';

export const loadUser = createAction(
  '[User] Load User',
  props<{ id: string }>()
);

export const updateUser = createAction(
  '[User] Update User',
  props<{ name: string }>()
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: any }>()
);

export const userUpdateOn = createAction('[User] User Update On');

export const userUpdateOff = createAction('[User] User Update Off');
