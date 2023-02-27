import { configureStore } from '@reduxjs/toolkit';
import loginRed from '../slices/login';

const store = configureStore({
  reducer: {
    login: loginRed,
  },
});

export default store;
