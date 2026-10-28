"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Eye, EyeOff } from "lucide-react";
import { loginCustomer, clearError } from "@/store/authSlice";

const inputClass =
  "w-full rounded-xl border border-[#2D1C59]/15 bg-white px-4 py-3 text-sm text-[#2A3630] placeholder:text-[#586860]/60 outline-none transition focus:border-[#2D1C59] focus:ring-2 focus:ring-[#2D1C59]/10";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error, user, hydrated } = useSelector((s) => s.auth);

  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);

  // If already logged in, go to home
  useEffect(() => {
    if (hydrated && user) router.replace("/");
  }, [hydrated, user, router]);

  // Clear any old error when leaving the page
  useEffect(() => () => dispatch(clearError()), [dispatch]);

  const handleChange = (e) => {
    if (error) dispatch(clearError());
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(
      loginCustomer({ email: form.email.trim(), password: form.password })
    );
    if (loginCustomer.fulfilled.match(res)) router.push("/");
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-10 sm:py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#2D1C59]/10 sm:p-10"
      >
        <div className="text-center">
          <h1 className="font-serif text-3xl text-[#2D1C59] sm:text-4xl">Welcome back</h1>
          <p className="mt-2 text-sm text-[#2A3630]/70">Login to continue your journey</p>
        </div>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-[#2D1C59]">Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-[#2D1C59]">Password</span>
          <div className="relative">
            <input
              name="password"
              type={showPass ? "text" : "password"}
              required
              autoComplete="current-password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className={`${inputClass} pr-11`}
            />
            <button
              type="button"
              onClick={() => setShowPass((v) => !v)}
              aria-label={showPass ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#586860] hover:text-[#2D1C59]"
            >
              {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>

        {error && (
          <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#2D1C59] py-3 text-sm font-medium text-white transition hover:bg-[#35146E] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {loading && (
          <p className="text-center text-xs text-[#586860]">
            The first request can take 30–50 seconds while the server wakes up. Please wait.
          </p>
        )}

        <p className="text-center text-sm text-[#2A3630]/70">
          New here?{" "}
          <Link href="/signup" className="font-medium text-[#2D1C59] underline underline-offset-4">
            Create an account
          </Link>
        </p>
      </form>
    </section>
  );
}