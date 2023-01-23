import { createSlice } from '@reduxjs/toolkit';
import { userApi } from '@/services/user';
import type { RootState } from '@/app/store';

const initialState = {
  username: null,
  email: null,
  token: null,
  isAuthenticated: false,
} as {
  username: null | string;
  email: null | string;
  token: string | null;
  isAuthenticated: boolean;
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    // Listen for relevant API calls – login and getUser
    builder
      // Login Endpoints
      .addMatcher(userApi.endpoints.login.matchPending, (_state, action) => {
        console.log('pending login', action);
      })
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        console.log('fulfilled login', action);
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addMatcher(userApi.endpoints.login.matchRejected, (_state, action) => {
        console.log('rejected login', action);
        return initialState;
      })
      // getUser Endpoints
      .addMatcher(userApi.endpoints.getUser.matchPending, (_state, action) => {
        console.log('pending user fetch', action);
      })
      .addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, action) => {
        console.log('fulfilled', action);
        state.username = action.payload.username;
        state.email = action.payload.email;
      })
      .addMatcher(userApi.endpoints.getUser.matchRejected, (_state, action) => {
        console.log('rejected', action);
        return initialState;
      });
  },
});

export const { logout } = slice.actions;
export default slice.reducer;

// A custom selector
export const selectIsAuthenticated = (state: RootState) => state.user.isAuthenticated;
