import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { ConfigService } from '../../services/config.service';
import { ConfigActions } from '../actions/config.actions';

@Injectable()
export class ConfigEffects {
  getConfig$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ConfigActions.getConfig),
      switchMap(() =>
        this.configService
          .getConfig()
          .pipe(
            tap(console.log),
            map((config) => ConfigActions.getConfigSuccess({ config }))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private configService: ConfigService
  ) {}
}
