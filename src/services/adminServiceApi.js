import api from "@/lib/api";

const BASE = "/admin/services";

export const getServicesApi = async ({ page = 1, limit = 10 } = {}) =>
  (await api.get(BASE, { params: { page, limit } })).data;

export const getServiceByIdApi = async (id) =>
  (await api.get(`${BASE}/${id}`)).data;

export const createServiceApi = async (payload) =>
  (await api.post(BASE, payload)).data;

export const updateServiceApi = async (id, payload) =>
  (await api.patch(`${BASE}/${id}`, payload)).data;

export const deleteServiceApi = async (id) =>
  (await api.delete(`${BASE}/${id}`)).data;