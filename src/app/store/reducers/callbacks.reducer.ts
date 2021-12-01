import {
  createSelector,
  createFeatureSelector,
  Action,
  on,
  createReducer,
} from '@ngrx/store';

import {
  registerActivityButtonCallback,
  registerProgressbarCallback,
} from '../actions/callbacks.actions';
import { AppState } from './layout.reducer';

export interface CallbacksState {
  activityButtonCallback: () => void;
  progressBarCallback: () => void;
}

const initialState: CallbacksState = {
  activityButtonCallback: () => {},
  progressBarCallback: () => {},
};

export const selectCallbacks = createFeatureSelector<AppState, CallbacksState>(
  'callbacks'
);

export const selectActivityButtonCallback = createSelector(
  selectCallbacks,
  (state: CallbacksState) => {
    return state.activityButtonCallback;
  }
);

export const selectprogressBarCallback = createSelector(
  selectCallbacks,
  (state: CallbacksState) => {
    return state.progressBarCallback;
  }
);

const _callbacksReducer = createReducer(
  initialState,
  on(registerActivityButtonCallback, (state, { payload }) => {
    return {
      ...state,
      activityButtonCallback: payload.callback,
    };
  }),

  on(registerProgressbarCallback, (state, { payload }) => ({
    ...state,
    progressBarCallback: payload.callback,
  }))
);

export function callbacksReducer(state: CallbacksState, action: Action) {
  return _callbacksReducer(state, action);
}
