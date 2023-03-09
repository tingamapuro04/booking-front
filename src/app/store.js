import { configureStore } from '@reduxjs/toolkit';
import coaches from '../slices/allSlice';
import user from '../slices/login';
import coach from '../slices/coach';
import myReservations from '../slices/reservations';

const store = configureStore({
  reducer: {
    reservations: myReservations,
    current_user: user,
    allcoaches: coaches,
    Onecoach: coach,
  },
});

export default store;
