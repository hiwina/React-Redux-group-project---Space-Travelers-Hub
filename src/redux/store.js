import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';
import rocketsReducer from './Rocket/rocketSlice';
import dragonsReducer from './dragons/dragonSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: rocketsReducer,
    dragons: dragonsReducer,
  },
});

export default store;
