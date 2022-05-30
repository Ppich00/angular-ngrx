import { Action, createReducer, on } from '@ngrx/store';
import { ConfigActions } from '../actions/config.actions';
import { initialConfigState } from '../state/config.state';

export const initialState = initialConfigState;

export const configReducer = createReducer(
  initialState,
  on(ConfigActions.getConfig, (state) => {
    return { ...state, config: state.config };
  }),
  on(ConfigActions.getConfigSuccess, (state, actions) => {
    return { ...state, config: actions.config };
  })
);
