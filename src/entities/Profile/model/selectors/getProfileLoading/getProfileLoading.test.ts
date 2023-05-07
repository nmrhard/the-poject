import { StateSchema } from 'app/provider/StoreProvider';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileLoading test', () => {
  it('should return loading is true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };

    expect(getProfileLoading(state as StateSchema)).toEqual(true);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileLoading(state as StateSchema)).toEqual(undefined);
  });
});
