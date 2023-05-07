import { StateSchema } from 'app/provider/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getLoginForm test', () => {
  it('should return form data', () => {
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
        form: data,
      },
    };

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
