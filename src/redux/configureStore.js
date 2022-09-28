import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocketredux/rcktreducer';

export default configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});
