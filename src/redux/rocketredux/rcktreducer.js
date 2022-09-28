/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const mainURL = 'https://api.spacexdata.com/v3/rockets';

export const fetchingRocketsInfo = createAsyncThunk(
  'rockets/fetchingRocketsInfo',
  async () => {
    const response = await fetch(mainURL);
    const data = await response.json();

    const rocketsItemInfo = data.map((rocket) => ({
      id: rocket.rocket_id,
      images: rocket.flickr_images,
      name: rocket.rocket_name,
      description: rocket.description,
      reserved: false,
    }));

    return rocketsItemInfo;
  },
);

const initialState = [];

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserveRocket: (state, action) => state.map((rocket) => {
      if (rocket.id === action.payload) {
        return { ...rocket, reserved: !rocket.reserved };
      }
      return rocket;
    }),
  },
  extraReducers: {
    [fetchingRocketsInfo.fulfilled]: (state, action) => action.payload,
  },
});

export const { reserveRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
