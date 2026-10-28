import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/api";

const getError = (err) => {
  const d = err.response?.data?.detail;
  if (typeof d === "string") return d;
  if (Array.isArray(d)) return d.map((e) => e.msg).join(", ");
  if (err.code === "ECONNABORTED") return "Server slow hai, dobara try karo";
  return err.message || "Something went wrong";
};

/* ---------- localStorage helpers ---------- */
const storage = {
  save(token, user) {
    try {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    } catch {}
  },
  clear() {
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } catch {}
  },
  load() {
    try {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));
      return token && user ? { token, user } : null;
    } catch {
      return null;
    }
  },
};

/* ------------------------- THUNKS ------------------------- */

// SIGNUP (multipart/form-data)
export const registerCustomer = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/customer/register", formData);
      return data;
    } catch (err) {
      return rejectWithValue(getError(err));
    }
  }
);

// LOGIN (JSON)
export const loginCustomer = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/customer/login", payload);
      storage.save(data.access_token, data.user);
      return data;
    } catch (err) {
      return rejectWithValue(getError(err));
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  storage.clear();
});

export const hydrateAuth = createAsyncThunk("auth/hydrate", async () => {
  return storage.load(); // { token, user } ya null
});

/* -------------------------- SLICE -------------------------- */

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  hydrated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerCustomer.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(registerCustomer.fulfilled, (s) => {
        s.loading = false;
      })
      .addCase(registerCustomer.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload || "Signup failed";
      })

      .addCase(loginCustomer.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(loginCustomer.fulfilled, (s, a) => {
        s.loading = false;
        s.token = a.payload.access_token;
        s.user = a.payload.user;
      })
      .addCase(loginCustomer.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload || "Login failed";
      })

      .addCase(logoutUser.fulfilled, (s) => {
        s.user = null;
        s.token = null;
        s.error = null;
      })

      .addCase(hydrateAuth.fulfilled, (s, a) => {
        if (a.payload) {
          s.token = a.payload.token;
          s.user = a.payload.user;
        }
        s.hydrated = true;
      })
      .addCase(hydrateAuth.rejected, (s) => {
        s.hydrated = true;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;