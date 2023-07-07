import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  rocket: [],
  error: '',
};
const url = 'https://api.spacexdata.com/v4/dragons';
export const fetchDragons = createAsyncThunk('rocket/fetchrockets', () => axios.get(url).then((res) => res.data));

const dragonsSlice = createSlice({
  name: 'rocket',
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
