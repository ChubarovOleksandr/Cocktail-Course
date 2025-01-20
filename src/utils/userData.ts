import { formData } from "../types/authTypes";

export const setUserData = (data: formData) => {
  localStorage.setItem('userData', JSON.stringify(data));
}

export const removeUserData = () => {
  localStorage.removeItem('userData');
}

export const getUserData = (): formData | null => {
  const userData =  localStorage.getItem(('userData'));
  if(userData) return JSON.parse(userData)
  return null;
}