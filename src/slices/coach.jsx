import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getOneCoach = createAsyncThunk('coaches/coach', async (payload) => {
  const response = await fetch(`http://localhost:3001/coaches/${payload.id}.json`);
  const data = await response.json();
  return data;
});

const coachOne = localStorage.getItem('current_coach') !== null
  ? JSON.parse(localStorage.getItem('current_coach'))
  : {};

const coachSlice = createSlice({
  name: 'coach',
  initialState: {
    status: 'idle',
    data: coachOne,
    error: null,
  },
  reducers: {
    addCoach: (state, action) => {
      let newState = state;
      newState = action.payload;
      localStorage.setItem('current_coach', JSON.stringify(newState));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOneCoach.pending, (state) => {
        const newState = state;
        newState.status = 'loading';
      })
      .addCase(getOneCoach.fulfilled, (state, action) => {
        const newState = state;
        newState.status = 'succeeded';
        newState.data = action.payload;
      })
      .addCase(getOneCoach.rejected, (state, action) => {
        const newState = state;
        newState.status = 'failed';
        newState.error = action.error.message;
      });
  },
});

export const { addCoach } = coachSlice.actions;

const coach = coachSlice.reducer;
export default coach;
