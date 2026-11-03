const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://inner-wellness-backend.onrender.com/api/v1";

const ADMIN_URL = `${BASE_URL}/admin/manage-admins`;

const request = async (url, { method = "GET", body, token } = {}) => {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  let data = null;
  try {
    data = await res.json();
  } catch (_) {
    data = null;
  }

  if (!res.ok) {
    const detail = data?.detail || data?.message;
    const message = Array.isArray(detail)
      ? detail.map((d) => d.msg).join(", ")
      : detail || `Request failed (${res.status})`;
    throw new Error(message);
  }
  return data;
};

const adminManageService = {
  list: (token) => request(`${ADMIN_URL}/list`, { token }),
  detail: (id, token) => request(`${ADMIN_URL}/detail/${id}`, { token }),
  create: (payload, token) =>
    request(`${ADMIN_URL}/create`, { method: "POST", body: payload, token }),
  update: (id, payload, token) =>
    request(`${ADMIN_URL}/update/${id}`, { method: "PUT", body: payload, token }),
  remove: (id, token) =>
    request(`${ADMIN_URL}/remove/${id}`, { method: "DELETE", token }),
};

export default adminManageService;