import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rocket/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
