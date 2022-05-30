import { RouterReducerState } from '@ngrx/router-store';
import { IconfigState, initialConfigState } from './config.state';
import { initialUserState, IUserState } from './user.state';

export interface IAppState {
  router?: RouterReducerState;
  users: IUserState;
  config: IconfigState;
}

export const initialAppState: IAppState = {
  users: initialUserState,
  config: initialConfigState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
