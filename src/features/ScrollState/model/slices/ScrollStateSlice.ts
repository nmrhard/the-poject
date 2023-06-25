import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollStateSchema } from '../types/ScrollStateSchema';

const initialState: ScrollStateSchema = {
  scroll: {},
};

export const scrollStateSlice = createSlice({
  name: 'scrollState',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: scrollStateActions } = scrollStateSlice;
export const { reducer: scrollStateReducer } = scrollStateSlice;
