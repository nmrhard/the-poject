import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import * as React from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({
  children,
  initialState,
  asyncReducers,
}: StoreProviderProps) => {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  );

  return <Provider store={store}>{children}</Provider>;
};
