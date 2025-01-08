import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { lectureType } from "../../types/materialTypes";

type stateTypes = {
  activeLecture: lectureType | null;
};

const initialState: stateTypes = {
  activeLecture: null,
};

export const lectureSlice = createSlice({
  name: "lecture",
  initialState,
  reducers: {
    setActiveLecture(state, action: PayloadAction<lectureType>) {
      state.activeLecture = action.payload;
    }
  },
});

export const { setActiveLecture } = lectureSlice.actions;
