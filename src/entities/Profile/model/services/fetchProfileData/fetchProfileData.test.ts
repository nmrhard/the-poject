import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

const data = {
  username: 'admin',
  age: 18,
  firstName: 'admin',
  lastName: 'admin',
  country: Country.Ukraine,
  city: 'Kharkiv',
};

describe('fetchProfileData', () => {
  it('success', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchProfileData);
    testAsyncThunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await testAsyncThunk.callThunk('1');

    expect(testAsyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  it('error login', async () => {
    const testAsyncThunk = new TestAsyncThunk(fetchProfileData);
    testAsyncThunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await testAsyncThunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
