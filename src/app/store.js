import { configureStore } from '@reduxjs/toolkit';
import coaches from '../slices/allSlice';
import user from '../slices/login';
import coach from '../slices/coach';

const store = configureStore({
  reducer: {
    current_user: user,
    allcoaches: coaches,
    Onecoach: coach,
  },
});

export default store;
