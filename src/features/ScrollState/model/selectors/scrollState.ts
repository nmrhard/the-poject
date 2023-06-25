import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/StoreProvider';

export const getScrollState = (state: StateSchema) => state.scrollState.scroll;

export const getScrollStateByPath = createSelector(
  getScrollState,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
