import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCoachData = createAsyncThunk('coaches/coaches', async () => {
  const response = await fetch('http://localhost:3001/coaches.json');
  const data = await response.json();
  return data;
});

const coachesSlice = createSlice({
  name: 'coaches',
  initialState: {
    status: 'idle',
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoachData.pending, (state) => {
        const newState = state;
        newState.status = 'loading';
      })
      .addCase(getCoachData.fulfilled, (state, action) => {
        const newState = state;
        newState.status = 'succeeded';
        newState.data = action.payload;
      })
      .addCase(getCoachData.rejected, (state, action) => {
        const newState = state;
        newState.status = 'failed';
        newState.error = action.error.message;
      });
  },
});

const coaches = coachesSlice.reducer;
export default coaches;
