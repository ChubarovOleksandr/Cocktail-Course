import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { lectureSlice } from "./slices/lectureSlice";
import { authSlice } from "./slices/authSlice";
import { userSlice } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    lecture: lectureSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export { store };
