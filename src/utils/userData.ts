import { LoginDataInterface } from "../api/interface";

export const setUserData = (data: LoginDataInterface) => {
  localStorage.setItem("userData", JSON.stringify(data));
};

export const removeUserData = () => {
  localStorage.removeItem("userData");
};

export const getUserData = (): LoginDataInterface => {
  const userData = localStorage.getItem("userData");
  if (userData) return JSON.parse(userData);
  return null;
};
