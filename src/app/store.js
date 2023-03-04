import { configureStore } from '@reduxjs/toolkit';
import loginRed from '../slices/login';
import coaches from '../slices/allSlice';

const store = configureStore({
  reducer: {
    login: loginRed,
    allcoaches: coaches,
  },
});

export default store;
