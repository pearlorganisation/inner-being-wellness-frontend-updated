import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://inner-wellness-backend.onrender.com/api/v1",
  timeout: 60000, // Render free tier cold start ke liye 60s
});

// Har request me token automatically (user side)
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Token expire / invalid ho to session clear karke login pe bhejo
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err.response?.status;
    const url = err.config?.url || "";
    const isAuthCall = url.includes("/login") || url.includes("/register");

    if (
      status === 401 &&
      !isAuthCall &&
      typeof window !== "undefined" &&
      !window.location.pathname.startsWith("/admin") // admin ka apna logout flow hai
    ) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(err);
  }
);

export default api;