import { configureStore } from '@reduxjs/toolkit';
import socialReducer from '../features/social/socialSlice';
import { riotLoLApi } from '../services/riotApi';

export const store = configureStore({
  reducer: {
    social: socialReducer,
    [riotLoLApi.reducerPath]: riotLoLApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(riotLoLApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
