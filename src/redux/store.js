import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';
import dragonsReducer from './dragons/dragonSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    dragons: dragonsReducer,
  },
});

export default store;
