import axios from "axios";

const USER_TOKEN_KEY = "token";
const ADMIN_AUTH_KEY = "ibw_admin_auth"; // adminAuthSlice ki STORAGE_KEY

const getAdminToken = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(ADMIN_AUTH_KEY) || "null");
    return saved?.token || null;
  } catch {
    return null;
  }
};

const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://inner-wellness-backend.onrender.com/api/v1",
  timeout: 60000, // Render free tier cold start ke liye 60s
});

// /admin/* calls -> admin token, baaki -> user token
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const isAdminCall = (config.url || "").startsWith("/admin");
    const token = isAdminCall
      ? getAdminToken()
      : localStorage.getItem(USER_TOKEN_KEY);
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