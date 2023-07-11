/* eslint-disable react/jsx-no-useless-fragment */
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/provider/StoreProvider';
import {
  StateSchema,
  StateSchemaKeys,
} from 'app/provider/StoreProvider/config/StateSchema';
import * as React from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
  [name in StateSchemaKeys]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  removeOnUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeOnUnmount = true,
}) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  React.useEffect(() => {
    const mountedReducers = store.reducerManager.getMountedReducers();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKeys];

      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKeys, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeOnUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKeys);
          dispatch({ type: `@REMOVE ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
