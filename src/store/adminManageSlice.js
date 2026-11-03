import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminManageService from "@/services/adminManageService";
import { logoutAdmin } from "@/store/adminAuthSlice";

const getToken = (getState) => getState().adminAuth?.token;

const normalizeList = (data) =>
  Array.isArray(data) ? data : data?.items || data?.data || data?.admins || [];

// 401 pe session khatam: logout karo, AdminGuard login page pe bhej dega
const fail = (e, dispatch, rejectWithValue) => {
  if (e.status === 401) dispatch(logoutAdmin());
  return rejectWithValue(e.message);
};

/* ---------- thunks ---------- */
export const fetchAdmins = createAsyncThunk(
  "adminManage/fetchAll",
  async (_, { getState, dispatch, rejectWithValue }) => {
    try {
      return normalizeList(await adminManageService.list(getToken(getState)));
    } catch (e) {
      return fail(e, dispatch, rejectWithValue);
    }
  }
);

export const createAdmin = createAsyncThunk(
  "adminManage/create",
  async (payload, { getState, dispatch, rejectWithValue }) => {
    try {
      return await adminManageService.create(payload, getToken(getState));
    } catch (e) {
      return fail(e, dispatch, rejectWithValue);
    }
  }
);

export const updateAdmin = createAsyncThunk(
  "adminManage/update",
  async ({ id, payload }, { getState, dispatch, rejectWithValue }) => {
    try {
      const data = await adminManageService.update(id, payload, getToken(getState));
      return { id, data, payload };
    } catch (e) {
      return fail(e, dispatch, rejectWithValue);
    }
  }
);

export const removeAdmin = createAsyncThunk(
  "adminManage/remove",
  async (id, { getState, dispatch, rejectWithValue }) => {
    try {
      await adminManageService.remove(id, getToken(getState));
      return id;
    } catch (e) {
      return fail(e, dispatch, rejectWithValue);
    }
  }
);

/* ---------- slice ---------- */
const initialState = { list: [], loading: false, saving: false, error: null };

const adminManageSlice = createSlice({
  name: "adminManage",
  initialState,
  reducers: {
    clearAdminError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // logout pe list saaf, taaki agla admin purana data na dekhe
      .addCase(logoutAdmin, () => initialState)

      // list
      .addCase(fetchAdmins.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(fetchAdmins.fulfilled, (s, a) => {
        s.loading = false;
        s.list = a.payload;
      })
      .addCase(fetchAdmins.rejected, (s, a) => {
        s.loading = false;
        s.error = a.payload || "Could not load admins";
      })

      // create
      .addCase(createAdmin.pending, (s) => {
        s.saving = true;
        s.error = null;
      })
      .addCase(createAdmin.fulfilled, (s, a) => {
        s.saving = false;
        s.list.unshift(a.payload);
      })
      .addCase(createAdmin.rejected, (s, a) => {
        s.saving = false;
        s.error = a.payload || "Could not create admin";
      })

      // update
      .addCase(updateAdmin.pending, (s) => {
        s.saving = true;
        s.error = null;
      })
      .addCase(updateAdmin.fulfilled, (s, a) => {
        s.saving = false;
        const { id, data, payload } = a.payload;
        const idx = s.list.findIndex((x) => x.id === id);
        if (idx !== -1) s.list[idx] = { ...s.list[idx], ...payload, ...(data || {}), id };
      })
      .addCase(updateAdmin.rejected, (s, a) => {
        s.saving = false;
        s.error = a.payload || "Could not update admin";
      })

      // remove
      .addCase(removeAdmin.pending, (s) => {
        s.saving = true;
        s.error = null;
      })
      .addCase(removeAdmin.fulfilled, (s, a) => {
        s.saving = false;
        s.list = s.list.filter((x) => x.id !== a.payload);
      })
      .addCase(removeAdmin.rejected, (s, a) => {
        s.saving = false;
        s.error = a.payload || "Could not remove admin";
      });
  },
});

export const { clearAdminError } = adminManageSlice.actions;
export default adminManageSlice.reducer;