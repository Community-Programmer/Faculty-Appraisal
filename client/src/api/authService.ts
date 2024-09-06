import { loginData, signupData } from "@/types/authTypes";
import { apiClient } from ".";

export const loginUser = async (data: loginData) => {
  return apiClient.post("/api/v1/auth/login", data);
};

export const signupUser = async (data: signupData) => {
  return apiClient.post("/api/v1/auth/signup", data);
};

export const verifyUser = async () => {
  return apiClient.post("/api/v1/auth/verify");
};

export const logoutUser = async () => {
  return apiClient.post("/api/v1/auth/logout");
};
