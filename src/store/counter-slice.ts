import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    customIncrease(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export type CounterAction =
  | ReturnType<typeof counterActions.increment>
  | ReturnType<typeof counterActions.decrement>
  | ReturnType<typeof counterActions.customIncrease>
  | ReturnType<typeof counterActions.toggleCounter>;

export default counterSlice.reducer;
