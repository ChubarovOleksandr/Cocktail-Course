import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI, registerAPI } from "../../api/authAPI";
import { emailField, formData, resetData, resetPasswordData } from "../../types/authTypes";
import { changePasswordAPI, checkCodeAPI, checkEmailAPI } from "../../api/resetAPI";

const initialState = {
  resetEmail: '',
  codeChecked: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setResetEmail(state, action) {
      state.resetEmail = action.payload;
    },
    checkedCode(state) {
      state.codeChecked = true;
    },
    resetState(state) {
      state.codeChecked = false;
      state.resetEmail = '';
    }
  },
})

export const { setResetEmail, checkedCode, resetState } = authSlice.actions;

///////////////////// THUNK /////////////////////

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (data: formData, {rejectWithValue}) => {
    try {
      const response = await registerAPI(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
)

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (data: formData, {rejectWithValue}) => {
    try {
      const response = await loginAPI(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
)

export const checkEmailThunk = createAsyncThunk(
  'reset/email',
  async (email: emailField, {rejectWithValue}) => {
    try {
      const response = await checkEmailAPI(email);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
)

export const checkCodeThunk = createAsyncThunk(
  'reset/code',
  async (code: resetData, {rejectWithValue}) => {
    try {
      const response = await checkCodeAPI(code);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
)

export const resetPasswordThunk = createAsyncThunk(
  'reset/change_password',
  async (password: resetPasswordData, {rejectWithValue}) => {
    try {
      const response = await changePasswordAPI(password);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
)