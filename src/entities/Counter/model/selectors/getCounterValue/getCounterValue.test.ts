import { StateSchema } from 'app/provider/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
  it('should return the counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10,
      },
    };
    const result = getCounterValue(state as StateSchema);
    expect(result).toEqual(state.counter && state?.counter.value);
  });
});
