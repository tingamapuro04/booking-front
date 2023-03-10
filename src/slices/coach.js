import { createSlice } from '@reduxjs/toolkit';

export const navigate = (data) => {
  window.location.href = `https://mentorcoach.netlify.app/coaches/${data.id}`;
};

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
});

export const { addCoach } = coachSlice.actions;

const coach = coachSlice.reducer;
export default coach;
