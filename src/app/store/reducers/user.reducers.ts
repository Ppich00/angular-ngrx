import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions/user.actions';
import { initialUserState } from '../state/user.state';

export const userReducer = createReducer(
  initialUserState,
  on(UserActions.getUsersSuccess, (state, actions) => {
    return { ...state, users: actions.users };
  }),
  on(UserActions.getUserSuccess, (state, actions) => {
    return { ...state, selectedUser: actions.user };
  })
);
