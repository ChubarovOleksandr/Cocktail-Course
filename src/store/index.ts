import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from './slices/authSlice';
import { useDispatch } from "react-redux";
import { lectureSlice } from "./slices/lectureSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    lecture: lectureSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export {store}