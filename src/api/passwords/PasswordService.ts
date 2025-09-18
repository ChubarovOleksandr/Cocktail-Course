import axios from "axios";
import { EmailInterface, ResetCodeInterface, ResetPasswordInterface } from "./interface";

const instance = axios.create({
  baseURL: "http://155.133.23.86:8000/passwords",
  headers: {
    "Content-Type": "application/json",
  },
});

export const resetPasswordAPI = async (data: ResetPasswordInterface) => {
  try {
    const response = await instance.put("", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const requestResetPasswordAPI = async (data: EmailInterface) => {
  try {
    const response = await instance.post("", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyResetCodeAPI = async (data: ResetCodeInterface) => {
  try {
    const response = await instance.post("/codes", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
