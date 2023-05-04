import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
  username: 'admin',
  age: 18,
  firstName: 'admin',
  lastName: 'admin',
  country: Country.Ukraine,
  city: 'Kharkiv',
};

describe('updateProfileData', () => {
  it('success', async () => {
    const testAsyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    testAsyncThunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await testAsyncThunk.callThunk();

    expect(testAsyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  it('error', async () => {
    const testAsyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    });
    testAsyncThunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await testAsyncThunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  it('validate error', async () => {
    const testAsyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastName: '' },
      },
    });
    const result = await testAsyncThunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });
});
