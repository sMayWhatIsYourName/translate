import { configureStore } from '@reduxjs/toolkit';
import TranslatorSlice from './translator.slice';
export const store = configureStore({
  reducer: TranslatorSlice,
});

export type AppDispatch = typeof store.dispatch;