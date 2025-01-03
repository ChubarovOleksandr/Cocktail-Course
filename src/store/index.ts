import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from './slices/authSlice';
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export {store}