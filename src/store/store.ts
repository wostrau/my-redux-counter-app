import { legacy_createStore as createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };
type stateType = typeof initialState;

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
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

// const counterReducer = (
//   state: stateType = initialState,
//   action: any
// ): stateType => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, counter: state.counter + 1 };
//     case 'CUSTOM_INCREASE':
//       return { ...state, counter: state.counter + action.value };
//     case 'DECREMENT':
//       return { ...state, counter: state.counter - 1 };
//     case 'TOGGLE':
//       return { ...state, showCounter: !state.showCounter };
//     default:
//       return state;
//   }
// };

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
export type { stateType };
export const counterActions = counterSlice.actions;
