import axios from "axios";
import { formData } from "../types/authTypes";

const instance = axios.create({
  baseURL: "http://185.25.118.45:8000/auth",
});

export const registerAPI = async (data: formData) => {
  try {
    const response = await instance.post('/register', data);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const loginAPI = async (data: formData) => {
  try {
    const response = await instance.post('/login', data);
    return response.data;
  } catch (error) {
    throw error;
  }
}