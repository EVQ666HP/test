import { configureStore } from '@reduxjs/toolkit';
import shopsSlice from './Slice/shopsSlice';

export const store = configureStore({
  reducer: {
    shopsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
