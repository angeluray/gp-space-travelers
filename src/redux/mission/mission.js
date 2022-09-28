import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissionsData = createAsyncThunk(
  'missions/getMissionsData',
  async () => {
    const res = await fetch('https://api.spacexdata.com/v3/missions');

    const data = await res.json();

    const missionsData = data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      canceled: false,
    }));
    return missionsData;
  },
);

const mission = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    JoinMission: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        return { ...mission, canceled: !mission.canceled };
      }
      return mission;
    }),
  },
  extraReducers: {
    [getMissionsData.fulfilled]: (state, action) => action.payload,
  },
});

export const { JoinMission } = mission.actions;
export default mission.reducer;
