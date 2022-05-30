import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { IConfig } from '../../models/config';

export const ConfigActions = createActionGroup({
  source: 'Config',
  events: {
    'Get Config': emptyProps(),
    'Get Config Success': props<{ config: IConfig }>(),
  },
});
