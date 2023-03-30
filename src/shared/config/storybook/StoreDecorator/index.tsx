/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
