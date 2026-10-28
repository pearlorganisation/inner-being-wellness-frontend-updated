import axios from "axios";

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

// har request me token automatically lag jayega
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;