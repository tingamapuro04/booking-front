import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCoachData = createAsyncThunk('coaches/coaches', async () => {
  const response = await fetch(
    'https://booking-app-7i9f.onrender.com/api/v1/coaches',
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))}`,
      },
    },
  );

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
        // console.log(action.payload);
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
