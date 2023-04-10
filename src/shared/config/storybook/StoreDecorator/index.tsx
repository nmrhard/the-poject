/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
