import {
  AnyAction,
  ReducersMapObject,
  combineReducers,
  Reducer,
} from '@reduxjs/toolkit';
import {
  MountedReducers,
  ReducerManager,
  StateSchemaKeys,
  StateSchema,
} from './StateSchema';

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: StateSchemaKeys[] = [];

  const mountedReducers: MountedReducers = {};

  return {
    getReducerMap: () => reducers,
    getMountedReducers: () => mountedReducers,

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
      mountedReducers[key] = true;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKeys) => {
      // @ts-ignore
      if (!key || !reducers[key]) {
        return;
      }

      // @ts-ignore
      delete reducers[key];
      mountedReducers[key] = false;

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}
