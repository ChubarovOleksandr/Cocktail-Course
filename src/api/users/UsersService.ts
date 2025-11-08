import axios from "axios";
import { LoginDataInterface, UserInfoInterface } from "../interface";

const instance = axios.create({
  baseURL: "https://bartenderoom.org/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export const createUserAPI = async (data: LoginDataInterface) => {
  try {
    const response = await instance.post("", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUserAPI = async (data: LoginDataInterface) => {
  try {
    const response = await instance.post("/login", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserInfoAPI = async (email: string): Promise<UserInfoInterface[]> => {
  try {
    const response = await instance.get(`/list?email=${email}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllUsersAPI = async (): Promise<UserInfoInterface[]> => {
  try {
    const response = await instance.get("/list");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserReceiptFileAPI = async (userId: number): Promise<Blob> => {
  try {
    const response = await instance.get(`/receipt_files?user_id=${userId}`, {
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    alert("Либо файла нету, либо произошла ошибка при загрузке");
    console.log(error);
    throw error;
  }
};

export const editUserPayStatusAPI = async (userId: number, payStatus: string) => {
  try {
    const response = await instance.patch("", { user_id: userId, pay_status: payStatus });
    return response.data;
  } catch (error) {
    throw error;
  }
};
