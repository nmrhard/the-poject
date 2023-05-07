import { StateSchema } from 'app/provider/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getLoginError test', () => {
  it('should return profile data', () => {
    const data = {
      username: 'admin',
      age: 18,
      firstName: 'admin',
      lastName: 'admin',
      country: Country.Ukraine,
      city: 'Kharkiv',
      currency: Currency.UAH,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
