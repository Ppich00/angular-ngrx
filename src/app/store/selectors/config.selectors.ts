import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';

const configState = (state: IAppState) => state.config;

export const selectConfig = createSelector(
  configState,
  (state) => state.config
);
