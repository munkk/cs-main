import { createAction } from '@ngrx/store';

export const registerActivityButtonCallback = createAction(
  '[Callbacks] RegisterActivityButtonCallback',
  (callback) => ({ payload: callback })
);
export const registerProgressbarCallback = createAction(
  '[Callbacks] RegisterProgressbarCallback',
  (callback) => ({ payload: callback })
);
