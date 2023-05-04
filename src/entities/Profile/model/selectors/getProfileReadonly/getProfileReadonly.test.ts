import { StateSchema } from 'app/provider/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly test', () => {
  it('should return readonly is true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadonly(state as StateSchema)).toEqual(true);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
  });
});
