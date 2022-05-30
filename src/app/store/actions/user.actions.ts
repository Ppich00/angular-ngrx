import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IUser } from '../../models/user';


export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Get Users': emptyProps(),
    'Get Users Success': props<{ users: IUser[] }>(),
    'Get User': props<{ id: number }>(),
    'Get User Success': props<{ user: IUser }>(),
  },
});

