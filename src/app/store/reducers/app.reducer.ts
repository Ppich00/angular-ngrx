import { routerReducer } from '@ngrx/router-store';
import { Action, ActionReducerMap, createReducer, on } from '@ngrx/store';
import { IAppState, initialAppState } from '../state/app.state';
import { configReducer } from './config.reducer';
import { userReducer } from './user.reducers';

export const initialState = initialAppState;

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducer,
  config: configReducer,
};
