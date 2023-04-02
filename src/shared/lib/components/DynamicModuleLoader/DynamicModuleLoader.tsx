/* eslint-disable react/jsx-no-useless-fragment */
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from 'app/provider/StoreProvider';
import { StateSchemaKeys } from 'app/provider/StoreProvider/config/StateSchema';
import * as React from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
  [name in StateSchemaKeys]?: Reducer;
};

type ReducerListEntry = [StateSchemaKeys, Reducer];

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
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeOnUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@REMOVE ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
