import { StateSchema } from 'app/provider/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounter } from './getCounter';

describe('getCounter', () => {
  it('should return the counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    const result = getCounter(state as StateSchema);
    expect(result).toEqual(state.counter);
  });
});
