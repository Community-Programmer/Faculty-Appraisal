import axios from "axios";

const BASE_URL = "http://localhost:5050";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const resourceApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

export { apiClient, resourceApi };
