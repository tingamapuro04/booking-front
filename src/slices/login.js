import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getUserData = createAsyncThunk('user/coaches', async () => {
  const response = await fetch('http://localhost:3001/logged_in');
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: 'coaches',
  initialState: {
    status: 'idle',
    data: {},
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      let newState = state;
      newState = action.payload;
      localStorage.setItem('mobutu', JSON.stringify(newState));
    },
  },
});

const user = userSlice.reducer;
export default user;
