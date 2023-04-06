import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // it('success login', async () => {
  //   const userValue = { id: '1', username: 'test' };
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
  //   const action = loginByUsername({ username: 'test', password: 'test' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toBe(userValue);
  // });

  // it('error login', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUsername({ username: 'test', password: 'test' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('error');
  // });

  it('success login', async () => {
    const userValue = { id: '1', username: 'test' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const testAsyncThunk = new TestAsyncThunk(loginByUsername);
    const result = await testAsyncThunk.callThunk({
      username: 'test',
      password: 'test',
    });

    expect(testAsyncThunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(testAsyncThunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toBe(userValue);
  });

  it('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const testAsyncThunk = new TestAsyncThunk(loginByUsername);
    const result = await testAsyncThunk.callThunk({
      username: 'test',
      password: 'test',
    });

    expect(testAsyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});
