import {
  AnyAction,
  ReducersMapObject,
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';
import { StateSchema } from '../StoreProvider';
import { ReducerManager, StateSchemaKeys } from './StateSchema';

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: StateSchemaKeys[] = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        // @ts-ignore
        keysToRemove.forEach((key) => delete state[key]);
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKeys, reducer: Reducer) => {
      // @ts-ignore
      if (!key || reducers[key]) {
        return;
      }

      // @ts-ignore
      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKeys) => {
      // @ts-ignore
      if (!key || !reducers[key]) {
        return;
      }

      // @ts-ignore
      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
