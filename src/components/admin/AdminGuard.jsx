"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { hydrateAuth, logoutAdmin } from "@/store/adminAuthSlice";

const LOGIN_ROUTE = "/admin/login";
const STORAGE_KEY = "ibw_admin_auth"; // adminAuthSlice.js ki STORAGE_KEY ke same
const CHECK_EVERY_MS = 60_000;

// JWT ka exp padhta hai (signature verify nahi karta, wo backend ka kaam hai)
function isExpired(token) {
  try {
    const part = token.split(".")[1];
    const { exp } = JSON.parse(atob(part.replace(/-/g, "+").replace(/_/g, "/")));
    return typeof exp === "number" && exp * 1000 <= Date.now();
  } catch {
    return false;
  }
}

export default function AdminGuard({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { token, hydrated } = useSelector((s) => s.adminAuth);

  // Storage se session restore
  useEffect(() => {
    if (!hydrated) dispatch(hydrateAuth());
  }, [hydrated, dispatch]);

  // Token nahi hai to login pe
  useEffect(() => {
    if (hydrated && !token) router.replace(LOGIN_ROUTE);
  }, [hydrated, token, router]);

  // Token expire ho gaya to logout (abhi aur har minute)
  useEffect(() => {
    if (!token) return;
    const check = () => {
      if (isExpired(token)) dispatch(logoutAdmin());
    };
    check();
    const id = setInterval(check, CHECK_EVERY_MS);
    return () => clearInterval(id);
  }, [token, dispatch]);

  // Dusre tab me logout hua to yahan bhi logout
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY && !e.newValue) dispatch(logoutAdmin());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [dispatch]);

  if (!hydrated || !token) {
    return (
      <div role="status" aria-live="polite" style={wrap}>
        <style>{`@keyframes ibg-spin{to{transform:rotate(360deg)}}`}</style>
        <span style={spinner} aria-hidden="true" />
        <span>Checking your session…</span>
      </div>
    );
  }

  return <>{children}</>;
}

const wrap = {
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 14,
  background: "#FAF8F3",
  color: "#7B7590",
  fontFamily: "system-ui, sans-serif",
  fontSize: 14,
};

const spinner = {
  width: 28,
  height: 28,
  borderRadius: "50%",
  border: "3px solid #E4DDCF",
  borderTopColor: "#4A3A9A",
  animation: "ibg-spin .8s linear infinite",
};