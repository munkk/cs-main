import { createAction } from '@ngrx/store';

export const openSidemenu = createAction('[Base Layout] OpenSidemenu');
export const closeSidemenu = createAction('[Base Layout] CloseSidemenu');
export const showActivityButton = createAction(
  '[Base Layout] ShowActivityButton'
);
export const hideActivityButton = createAction(
  '[Base Layout] HideActivityButton'
);
export const changeActivityButtonTitle = createAction(
  '[Base Layout] ChangeActivityButtonTitle',
  (value) => ({ payload: value })
);
export const increaseProgress = createAction(
  '[Base Layout] IncreaseProgress',
  (value) => ({ payload: value })
);

export const changeTitleHeading = createAction(
  '[Base Layout] ChangeTitleHeading',
  (value) => ({ payload: value })
);
export const changeTitleSubheading = createAction(
  '[Base Layout] ChangeTitleSubheading',
  (value) => ({ payload: value })
);
export const changeTitleIcon = createAction(
  '[Base Layout] ChangeTitleIcon',
  (value) => ({ payload: value })
);
