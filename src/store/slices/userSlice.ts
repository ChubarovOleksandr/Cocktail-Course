import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfoInterface } from "../../api/interface";

interface StateInterface {
  userData: UserInfoInterface;
}

const initialState: StateInterface = {
  userData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserInfoInterface>) {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
