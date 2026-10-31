import api from "@/lib/api";

// Sirf API calls yaha. Redux / localStorage ka koi kaam nahi.

// multipart/form-data: FormData bhejo, axios Content-Type aur boundary khud set karta hai
export const registerCustomerApi = async (formData) => {
  const { data } = await api.post("/customer/register", formData);
  return data;
};

// JSON: { email, password }
export const loginCustomerApi = async (payload) => {
  const { data } = await api.post("/customer/login", payload);
  return data; // { access_token, token_type, user }
};





