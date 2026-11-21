import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import adminAuthReducer from "./adminAuthSlice";
import adminManageReducer from "./adminManageSlice";
import adminConsultationReducer from "./adminConsultationSlice";
import adminServicesReducer from "./adminServicesSlice";

export const makeStore = () =>
  configureStore({ reducer: { auth: authReducer, adminAuth: adminAuthReducer,
     adminManage: adminManageReducer, adminConsultations: adminConsultationReducer 
     ,adminServices: adminServicesReducer,} });
