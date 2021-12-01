import { createSelector, createReducer, on, Action } from '@ngrx/store';

import {
  openSidemenu,
  closeSidemenu,
  showActivityButton,
  hideActivityButton,
  changeActivityButtonTitle,
  increaseProgress,
  changeTitleSubheading,
  changeTitleHeading,
  changeTitleIcon,
} from '../actions/layout.actions';
import { CallbacksState } from './callbacks.reducer';
import { UserState } from './user.reducer';

export interface LayoutState {
  sidemenuIsOpened: boolean;
  activityButtonIsExpanded: boolean;
  activityButtonTitle: string;
  progressbarValue: number;
  titleHeading: string;
  titleSubheading: string;
  titleIcon: string;
}

export interface AppState {
  user: UserState;
  layout: LayoutState;
  callbacks: CallbacksState;
}

const initialState: LayoutState = {
  sidemenuIsOpened: true,
  activityButtonIsExpanded: false,
  activityButtonTitle: 'Далее',
  progressbarValue: 0,
  titleHeading: 'Учеба',
  titleSubheading: 'Начальный',
  titleIcon: 'lnr-graduation-hat',
};

export const selectLayout = (state: AppState) => state.layout;

export const selectActivityButtonState = createSelector(
  selectLayout,
  (state: LayoutState) => {
    return state.activityButtonIsExpanded;
  }
);

export const selectActivityButtonTitle = createSelector(
  selectLayout,
  (state: LayoutState) => {
    return state.activityButtonTitle;
  }
);

export const selectProgressValue = createSelector(
  selectLayout,
  (state: LayoutState) => {
    return state.progressbarValue;
  }
);

export const selectTitleHeading = createSelector(
  selectLayout,
  (state: LayoutState) => {
    return state.titleHeading;
  }
);

export const selectTitleSubheading = createSelector(
  selectLayout,
  (state: LayoutState) => {
    return state.titleSubheading;
  }
);

export const selectTitleIcon = createSelector(
  selectLayout,
  (state: LayoutState) => {
    return state.titleIcon;
  }
);

export const selectSidemenu = createSelector(
  selectLayout,
  (state: LayoutState) => {
    return state.sidemenuIsOpened;
  }
);

const _layoutReducer = createReducer(
  initialState,
  on(openSidemenu, (state) => ({
    ...state,
    sidemenuIsOpened: true,
  })),
  on(closeSidemenu, (state) => ({
    ...state,
    sidemenuIsOpened: false,
  })),
  on(showActivityButton, (state) => ({
    ...state,
    activityButtonIsExpanded: true,
  })),
  on(hideActivityButton, (state) => ({
    ...state,
    activityButtonIsExpanded: false,
  })),
  on(changeActivityButtonTitle, (state, { payload }) => ({
    ...state,
    activityButtonTitle: payload.value,
  })),
  on(increaseProgress, (state, { payload }) => ({
    ...state,
    progressbarValue: state.progressbarValue + payload.value,
  })),
  on(changeTitleHeading, (state, { payload }) => ({
    ...state,
    titleHeading: payload.value,
  })),
  on(changeTitleSubheading, (state, { payload }) => ({
    ...state,
    titleSubheading: payload.value,
  })),
  on(changeTitleIcon, (state, { payload }) => ({
    ...state,
    titleIcon: payload.value,
  }))
);

export function layoutReducer(state: LayoutState, action: Action) {
  return _layoutReducer(state, action);
}
