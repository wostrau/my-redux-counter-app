import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export type AuthAction =
  | ReturnType<typeof authActions.login>
  | ReturnType<typeof authActions.logout>;

export default authSlice.reducer;
