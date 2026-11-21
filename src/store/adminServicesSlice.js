import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getServicesApi,
  createServiceApi,
  updateServiceApi,
  deleteServiceApi,
} from "@/services/adminServiceApi";

const errMsg = (e) =>
  e?.response?.data?.detail || e?.response?.data?.message || e.message || "Something went wrong";

export const fetchServices = createAsyncThunk(
  "adminServices/fetch",
  async (params, { rejectWithValue }) => {
    try {
      return await getServicesApi(params);
    } catch (e) {
      return rejectWithValue(errMsg(e));
    }
  }
);

export const createService = createAsyncThunk(
  "adminServices/create",
  async (payload, { rejectWithValue }) => {
    try {
      return await createServiceApi(payload);
    } catch (e) {
      return rejectWithValue(errMsg(e));
    }
  }
);

export const updateService = createAsyncThunk(
  "adminServices/update",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      return await updateServiceApi(id, payload);
    } catch (e) {
      return rejectWithValue(errMsg(e));
    }
  }
);

export const deleteService = createAsyncThunk(
  "adminServices/delete",
  async (id, { rejectWithValue }) => {
    try {
      await deleteServiceApi(id);
      return id;
    } catch (e) {
      return rejectWithValue(errMsg(e));
    }
  }
);

const initialState = {
  items: [],
  total: 0,
  page: 1,
  limit: 10,
  totalPages: 1,
  loading: false,
  saving: false,
  error: null,
};

const adminServicesSlice = createSlice({
  name: "adminServices",
  initialState,
  reducers: {
    clearServicesError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchServices.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(fetchServices.fulfilled, (s, { payload }) => {
        s.loading = false;
        s.items = payload.results;
        s.total = payload.total;
        s.page = payload.page;
        s.limit = payload.limit;
        s.totalPages = payload.total_pages;
      })
      .addCase(fetchServices.rejected, (s, { payload }) => {
        s.loading = false;
        s.error = payload;
      })
      // create / update / delete
      .addCase(createService.pending, (s) => {
        s.saving = true;
      })
      .addCase(createService.fulfilled, (s) => {
        s.saving = false; // list page se dobara fetch hoga
      })
      .addCase(createService.rejected, (s, { payload }) => {
        s.saving = false;
        s.error = payload;
      })
      .addCase(updateService.pending, (s) => {
        s.saving = true;
      })
      .addCase(updateService.fulfilled, (s, { payload }) => {
        s.saving = false;
        s.items = s.items.map((i) => (i.id === payload.id ? payload : i));
      })
      .addCase(updateService.rejected, (s, { payload }) => {
        s.saving = false;
        s.error = payload;
      })
      .addCase(deleteService.fulfilled, (s, { payload }) => {
        s.items = s.items.filter((i) => i.id !== payload);
        s.total = Math.max(0, s.total - 1);
      })
      .addCase(deleteService.rejected, (s, { payload }) => {
        s.error = payload;
      });
  },
});

export const { clearServicesError } = adminServicesSlice.actions;
export default adminServicesSlice.reducer;