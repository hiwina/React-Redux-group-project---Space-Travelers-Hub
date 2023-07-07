import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

export const getData = createAsyncThunk(
  'rocket/getData',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      return response.data.map((item) => ({
        id: item.rocket_id,
        name: item.rocket_name,
        type: item.rocket_type,
        description: item.description,
        flickr_images: item.flickr_images,
      }));
    } catch (error) {
      return rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  rockets: [],
  isLoading: false,
  error: undefined,
  reservedRockets: [],
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, { payload }) => {
      const { rockets } = state;
      const updatedRockets = rockets.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      state.rockets = updatedRockets;
      state.reservedRockets = updatedRockets.filter(
        (rocket) => rocket.reserved,
      );
    },
    cancelationRocket: (state, { payload }) => {
      const { rockets } = state;
      const updatedRockets = rockets.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      state.rockets = updatedRockets;
      state.reservedRockets = state.reservedRockets.filter(
        (rocket) => rocket.id !== payload,
      );
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rockets = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reserveRocket, cancelationRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
