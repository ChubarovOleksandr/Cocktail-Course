import { formData } from "../types/authTypes";

export const setUserData = (data: formData) => {
  localStorage.setItem('userData', JSON.stringify(data));
}

export const removeUserData = () => {
  localStorage.removeItem('userData');
}