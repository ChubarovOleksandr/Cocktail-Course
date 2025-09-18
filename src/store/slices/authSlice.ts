import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateInterface {
  userEmail: string;
}

const initialState: StateInterface = {
  userEmail: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserEmail(state, action: PayloadAction<string>) {
      state.userEmail = action.payload;
    },
  },
});

export const { setUserEmail } = authSlice.actions;
