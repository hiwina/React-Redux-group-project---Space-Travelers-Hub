import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: true,
  isError: false,
};

const getMissionsURL = 'https://api.spacexdata.com/v3/missions/';
export const getMissions = createAsyncThunk('missions/getMissions', async (api) => {
  try {
    const response = await axios(getMissionsURL);
    return response.data;
  } catch (err) {
    return api.rejectWithValue('Api failed to fetch');
  }
});

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.err = false;
        state.missions = action.payload;
      })
      .addCase(getMissions.rejected, (state) => {
        state.isLoading = false;
        state.err = true;
      });
  },
});

export default missionSlice.reducer;
