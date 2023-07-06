import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  rocket: [],
  error: '',
};

const url = 'https://api.spacexdata.com/v4/dragons';
export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async (thunkAPI) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong!');
  }
});

const dragonsSlice = createSlice({
  name: 'dragon',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.pending, (state) => ({
      ...state, loading: true,
    }));
    builder.addCase(fetchDragons.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      rocket: action.payload,
      error: '',
    }));

    builder.addCase(fetchDragons.rejected, (state, action) => ({
      ...state,
      loading: false,
      rocket: [],
      error: action.error.message,
    }));
  },
});

export default dragonsSlice.reducer;
