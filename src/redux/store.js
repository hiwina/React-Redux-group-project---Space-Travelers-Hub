import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './Rocket/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
  },
});

export default store;
