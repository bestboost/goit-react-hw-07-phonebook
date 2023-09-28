import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    userContact: userReducer,
  },
});
