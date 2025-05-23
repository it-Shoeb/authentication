// import api from "./api";

import axios from "axios";
import api from "./api";

export const LoginApi = async (userData) => {
  const status = { success: false, data: "", error: "" };
  try {
    console.log(userData);
    const { data } = await api.post("/authentication/login", { ...userData });
    status = { success: true, data: data };
  } catch (error) {
    status = { success: true, error: error };
  }
  console.log(status);
  return status;
};

export const RegistrationApi = async (userData) => {
  const status = { success: false, data: "", error: "" };
  try {
    const { data } = await api.post(`/authentication/register`, {
      ...userData,
    });
    status.success = true;
    status.data = data;
  } catch (error) {
    status.success = false;
    status.error = error;
  }
  console.log(status);
  return status;
};
