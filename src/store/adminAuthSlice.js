import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "@/services/adminAuthService";

const STORAGE_KEY = "ibw_admin_auth";

export const loginAdmin = createAsyncThunk(
  "adminAuth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      return await adminLogin(credentials);
    } catch (err) {
      return rejectWithValue(err.message || "Login failed");
    }
  }
);

const initialState = { token: null, user: null, loading: false, error: null, hydrated: false };

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    hydrateAuth(state) {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (saved?.token) {
          state.token = saved.token;
          state.user = saved.user;
        }
      } catch {}
      state.hydrated = true;
    },
    logoutAdmin(state) {
      state.token = null;
      state.user = null;
      state.error = null;
      try { localStorage.removeItem(STORAGE_KEY); } catch {}
    },
    clearAuthError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.access_token;
        state.user = payload.user;
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify({ token: payload.access_token, user: payload.user }));
        } catch {}
      })
      .addCase(loginAdmin.rejected, (state, { payload, error }) => {
        state.loading = false;
        state.error = payload || error.message || "Login failed";
      });
  },
});

export const { hydrateAuth, logoutAdmin, clearAuthError } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;