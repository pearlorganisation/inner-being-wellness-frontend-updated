// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import * as api from "@/services/consultationService";

// /* Backend ka response alag-alag shape me aa sakta hai, sab handle karo:
//    [..]                         -> seedha array
//    { data: [..] }               -> data
//    { data: { items: [..] } }    -> nested
//    { items | results | consultations | requests | records: [..] }       */
// const LIST_KEYS = [
//   "items",
//   "results",
//   "consultations",
//   "requests",
//   "records",
//   "rows",
//   "data",
// ];

// function extractList(payload) {
//   if (Array.isArray(payload)) return payload;
//   if (!payload || typeof payload !== "object") return [];

//   for (const key of LIST_KEYS) {
//     const v = payload[key];
//     if (Array.isArray(v)) return v;
//     if (v && typeof v === "object") {
//       const nested = extractList(v);
//       if (nested.length) return nested;
//     }
//   }
//   return [];
// }

// function extractTotal(payload, fallback) {
//   if (!payload || typeof payload !== "object") return fallback;
//   return (
//     payload.total ??
//     payload.count ??
//     payload.total_count ??
//     payload.data?.total ??
//     payload.pagination?.total ??
//     fallback
//   );
// }

// export const fetchConsultations = createAsyncThunk(
//   "adminConsultations/fetch",
//   async (params, { rejectWithValue }) => {
//     try {
//       const res = await api.listConsultations(params);
//       if (process.env.NODE_ENV !== "production") {
//         console.log("[consultations] raw API response:", res);
//       }
//       return res;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );

// export const respondToConsultation = createAsyncThunk(
//   "adminConsultations/respond",
//   async ({ id, payload }, { rejectWithValue }) => {
//     try {
//       await api.respondConsultation(id, payload);
//       return { id, payload };
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );

// export const removeConsultation = createAsyncThunk(
//   "adminConsultations/remove",
//   async (id, { rejectWithValue }) => {
//     try {
//       await api.deleteConsultation(id);
//       return id;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );

// const slice = createSlice({
//   name: "adminConsultations",
//   initialState: { items: [], total: 0, loading: false, error: null },
//   reducers: {},
//   extraReducers: (b) => {
//     b.addCase(fetchConsultations.pending, (s) => {
//       s.loading = true;
//       s.error = null;
//     })
//       .addCase(fetchConsultations.fulfilled, (s, { payload }) => {
//         s.loading = false;
//         s.items = extractList(payload);
//         s.total = extractTotal(payload, s.items.length);
//       })
//       .addCase(fetchConsultations.rejected, (s, { payload }) => {
//         s.loading = false;
//         s.items = [];
//         s.error = payload || "Could not load consultations.";
//       })
//       .addCase(respondToConsultation.fulfilled, (s, { payload }) => {
//         const it = s.items.find((x) => String(x.id) === String(payload.id));
//         if (it) it.status = payload.payload.action === "confirm" ? "confirmed" : "declined";
//       })
//       .addCase(removeConsultation.fulfilled, (s, { payload }) => {
//         s.items = s.items.filter((x) => String(x.id) !== String(payload));
//       });
//   },
// });

// export default slice.reducer;





// updated code 




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "@/services/consultationService";

/* Backend kabhi id / _id / consultation_id bhejta hai — teeno handle karo */
export const getConsultationId = (c) =>
  c?.id ?? c?._id ?? c?.consultation_id ?? c?.consultationId ?? null;

const LIST_KEYS = [
  "items",
  "results",
  "consultations",
  "requests",
  "records",
  "rows",
  "data",
];

function extractList(payload) {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") return [];
  for (const key of LIST_KEYS) {
    const v = payload[key];
    if (Array.isArray(v)) return v;
    if (v && typeof v === "object") {
      const nested = extractList(v);
      if (nested.length) return nested;
    }
  }
  return [];
}

function extractTotal(payload, fallback) {
  if (!payload || typeof payload !== "object") return fallback;
  return (
    payload.total ??
    payload.count ??
    payload.total_count ??
    payload.data?.total ??
    payload.pagination?.total ??
    fallback
  );
}

export const fetchConsultations = createAsyncThunk(
  "adminConsultations/fetch",
  async (params, { rejectWithValue }) => {
    try {
      return await api.listConsultations(params);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const respondToConsultation = createAsyncThunk(
  "adminConsultations/respond",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      await api.respondConsultation(id, payload);
      return { id, payload };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const removeConsultation = createAsyncThunk(
  "adminConsultations/remove",
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteConsultation(id);
      return id;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const slice = createSlice({
  name: "adminConsultations",
  initialState: { items: [], total: 0, loading: false, error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchConsultations.pending, (s) => {
      s.loading = true;
      s.error = null;
    })
      .addCase(fetchConsultations.fulfilled, (s, { payload }) => {
        s.loading = false;
        s.items = extractList(payload);
        s.total = extractTotal(payload, s.items.length);
      })
      .addCase(fetchConsultations.rejected, (s, { payload }) => {
        s.loading = false;
        s.items = [];
        s.error = payload || "Could not load consultations.";
      })
      .addCase(respondToConsultation.fulfilled, (s, { payload }) => {
        const it = s.items.find(
          (x) => String(getConsultationId(x)) === String(payload.id)
        );
        if (it) it.status = payload.payload.action === "confirm" ? "confirmed" : "declined";
      })
      .addCase(removeConsultation.fulfilled, (s, { payload }) => {
        s.items = s.items.filter(
          (x) => String(getConsultationId(x)) !== String(payload)
        );
        s.total = Math.max(0, (s.total || 0) - 1);
      });
  },
});

export default slice.reducer;