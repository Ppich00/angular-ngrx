import { configReducer, initialState } from './config.reducer';

describe('Config Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = configReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
