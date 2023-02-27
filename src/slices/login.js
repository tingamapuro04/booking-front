import { createSlice } from '@reduxjs/toolkit';

const name = localStorage.getItem('username') !== null ? JSON.parse(localStorage.getItem('username')) : {};

const loginSlice = createSlice({
  name: 'login',
  initialState: name,
  reducers: {
    login: (state, action) => {
      const newState = state;
      newState.username = action.payload;
      localStorage.setItem('username', JSON.stringify(newState));
    },
  },
});

export const { login } = loginSlice.actions;
const loginRed = loginSlice.reducer;
export default loginRed;
