import {
  createSelector,
  createFeatureSelector,
  Action,
  on,
  createReducer,
} from '@ngrx/store';

import {
  loadUser,
  loadUserSuccess,
  userUpdateOff,
  userUpdateOn,
} from '../actions/user.actions';
import { AppState } from './layout.reducer';

export interface UserState {
  user: any;
  isFetching: boolean;
  isLoading: boolean;
}

const initialState: UserState = {
  user: {
    name: 'Dmitry',
    mail: 'dmitry@gmail.com',
  },
  isFetching: false,
  isLoading: false,
};

export const selectRoot = (state: AppState) => state.user;

export const selectUser = createSelector(selectRoot, (state: UserState) => {
  return state.user;
});

export const selectFetching = createSelector(selectRoot, (state: UserState) => {
  return state.isFetching;
});

const _userReducer = createReducer(
  initialState,
  on(loadUser, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(loadUserSuccess, (state, { user }) => {
    return {
      ...state,
      user: user,
      isLoading: false,
    };
  }),
  on(userUpdateOn, (state) => {
    return {
      ...state,
      isFetching: true,
    };
  }),
  on(userUpdateOff, (state) => {
    return {
      ...state,
      isFetching: false,
    };
  })
);

export function userReducer(state: UserState, action: Action) {
  return _userReducer(state, action);
}
