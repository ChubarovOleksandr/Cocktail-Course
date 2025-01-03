import axios from "axios";
import { emailField, resetData, resetPasswordData } from "../types/authTypes";

const instance = axios.create({
  baseURL: "http://185.25.118.45:8000/reset_password",
});

export const checkEmailAPI = async (email: emailField) => {
  try {
    const response = await instance.post("/email", email);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const checkCodeAPI = async (resetData: resetData) => {
  try {
    const response = await instance.post("/code", resetData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changePasswordAPI = async (password: resetPasswordData) => {
  try {
    const response = await instance.put('/change_password', password);
    return response.data;
  } catch (error) {
    throw error;
  }
}