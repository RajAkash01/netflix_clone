import { createSlice } from '@reduxjs/toolkit';

const name = 'user';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name,
  initialState,
  reducers: {
    // get data
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const UserReducer = userSlice.reducer;
export const selectUser = (state) => state.user.user;
