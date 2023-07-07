import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './dragons/dragonSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
});

export default store;
