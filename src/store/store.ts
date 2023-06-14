import { configureStore } from '@reduxjs/toolkit';
import authReducer, { AuthAction } from './auth-slice';
import counterReducer, { CounterAction } from './counter-slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type RootAction = CounterAction | AuthAction;

export default store;
export type { RootState, RootAction };
