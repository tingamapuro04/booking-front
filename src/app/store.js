import { configureStore } from '@reduxjs/toolkit';
import coaches from '../slices/allSlice';
import user from '../slices/login';

const store = configureStore({
  reducer: {
    current_user: user,
    allcoaches: coaches,
  },
});

export default store;
