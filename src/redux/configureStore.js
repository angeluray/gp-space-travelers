import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketredux/rcktreducer';
import missionReducer from './mission/mission';

export default configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketReducer,
  },
});
