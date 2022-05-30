import { IConfig } from '../../models/config';

export interface IconfigState {
  config: IConfig;
}

export const initialConfigState: IconfigState = {
  config: {} as IConfig,
};
