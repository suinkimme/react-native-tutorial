import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type counterState = {
  value: number;
};

const initialState: counterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    up: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
    down: (state, action: PayloadAction<number>) => {
      state.value = state.value - action.payload;
    },
  },
});

export default counterSlice;
export const { up, down } = counterSlice.actions;
