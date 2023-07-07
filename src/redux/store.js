import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rocket/rocketSlice';
import dragonsReducer from './dragons/dragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    dragons: dragonsReducer,

  },
});

export default store;
