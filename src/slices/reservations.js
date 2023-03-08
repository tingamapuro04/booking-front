import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getReservationData = createAsyncThunk('coaches/coaches', async () => {
  const response = await fetch(
    'https://booking-app-7i9f.onrender.com/api/v1/reserves',
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))}`,
      },
    },
  );

  const data = await response.json();
  return data;
});

const reservationSlice = createSlice({
  name: 'reservations',
  initialState: {
    status: 'idle',
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReservationData.pending, (state) => {
        const newState = state;
        newState.status = 'loading';
      })
      .addCase(getReservationData.fulfilled, (state, action) => {
        const newState = state;
        newState.status = 'succeeded';
        newState.data = action.payload;
      })
      .addCase(getReservationData.rejected, (state, action) => {
        const newState = state;
        newState.status = 'failed';
        newState.error = action.error.message;
      });
  },
});

const myReservations = reservationSlice.reducer;
export default myReservations;
