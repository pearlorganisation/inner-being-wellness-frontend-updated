const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://inner-wellness-backend.onrender.com/api/v1";

export async function adminLogin({ email, password }) {
  const res = await fetch(`${BASE_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  let data = null;
  try { data = await res.json(); } catch {}

  if (!res.ok) {
    const detail = data?.detail;
    throw new Error(
      typeof detail === "string"
        ? detail
        : Array.isArray(detail)
        ? detail.map((d) => d.msg).join(", ")
        : data?.message || "Login failed. Please check your credentials."
    );
  }
  return data;
}