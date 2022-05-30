import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, of, switchMap, withLatestFrom } from 'rxjs';
import { UserActions } from '../actions/user.actions';
import { IAppState } from '../state/app.state';
import { select, Store } from '@ngrx/store';
import { selectUserList } from '../selectors/user.selectors';
import { UserService } from '../../services/user.service';
import { IUserHttp } from '../../models/user-http.interface';
@Injectable()
export class UserEffects {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType<any>('[User] Get User'),
      map((action) => action.id),
      withLatestFrom(this.store.pipe(select(selectUserList))),
      switchMap(([id, users]) => {
        const selectedUser = users.filter((user) => user.id === id)[0];
        return of(UserActions.getUserSuccess({ user: selectedUser }));
      })
    )
  );

  getusers$ = createEffect(() =>
    this.actions$.pipe(
      ofType<any>('[User] Get Users'),
      switchMap(() =>
        this.userService
          .getUsers()
          .pipe(
            map((users: IUserHttp) =>
              UserActions.getUsersSuccess({ users: users.users })
            )
          )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private store: Store<IAppState>,
    private userService: UserService
  ) {}
}
