import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../../features/auth/counterSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
  },
});
