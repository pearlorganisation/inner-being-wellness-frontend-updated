"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Eye, EyeOff, Camera, CheckCircle2 } from "lucide-react";
import { registerCustomer, clearError } from "@/store/authSlice";

const DEFAULT_LOCATION = { lat: 28.6139, lng: 77.209 };

const inputClass =
  "w-full rounded-xl border border-[#2D1C59]/15 bg-white px-4 py-3 text-sm text-[#2A3630] placeholder:text-[#586860]/60 outline-none transition focus:border-[#2D1C59] focus:ring-2 focus:ring-[#2D1C59]/10";

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[#2D1C59]">{label}</span>
      {children}
    </label>
  );
}

export default function SignupPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error } = useSelector((s) => s.auth);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    gender: "male",
    full_address: "",
  });
  const [pic, setPic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [localError, setLocalError] = useState("");
  const [success, setSuccess] = useState(false);

  // Clear any old error when leaving the page
  useEffect(() => () => dispatch(clearError()), [dispatch]);

  // Profile photo preview
  useEffect(() => {
    if (!pic) return setPreview(null);
    const url = URL.createObjectURL(pic);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [pic]);

  const handleChange = (e) => {
    if (error) dispatch(clearError());
    if (localError) setLocalError("");
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handlePic = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setLocalError("Profile photo must be smaller than 5MB.");
      return;
    }
    setLocalError("");
    setPic(file);
  };

  const getLocation = () =>
    new Promise((resolve) => {
      if (!navigator.geolocation) return resolve(DEFAULT_LOCATION);
      navigator.geolocation.getCurrentPosition(
        (p) => resolve({ lat: p.coords.latitude, lng: p.coords.longitude }),
        () => resolve(DEFAULT_LOCATION),
        { timeout: 4000 }
      );
    });

  const validate = () => {
    if (!/^\d{10}$/.test(form.mobile)) return "Mobile number must be 10 digits.";
    if (form.password.length < 6) return "Password must be at least 6 characters.";
    if (form.password !== form.confirmPassword) return "Passwords do not match.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = validate();
    if (msg) return setLocalError(msg);

    const { lat, lng } = await getLocation();

    const fd = new FormData();
    fd.append("name", form.name.trim());
    fd.append("email", form.email.trim());
    fd.append("password", form.password);
    fd.append("mobile", form.mobile);
    fd.append("gender", form.gender);
    fd.append("full_address", form.full_address.trim());
    fd.append("latitude", lat);
    fd.append("longitude", lng);
    if (pic) fd.append("profile_pic", pic);

    const res = await dispatch(registerCustomer(fd));
    if (registerCustomer.fulfilled.match(res)) {
      setSuccess(true);
      setTimeout(() => router.push("/login"), 1500);
    }
  };

  const shownError = localError || error;

  return (
    <section className="flex min-h-[75vh] items-center justify-center px-4 py-10 sm:py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl space-y-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#2D1C59]/10 sm:p-10"
      >
        <div className="text-center">
          <h1 className="font-serif text-3xl text-[#2D1C59] sm:text-4xl">Create your account</h1>
          <p className="mt-2 text-sm text-[#2A3630]/70">
            Join Inner Being Wellness and begin your journey
          </p>
        </div>

        {/* Profile photo */}
        <div className="flex flex-col items-center gap-2">
          <label className="group relative cursor-pointer">
            <span className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-[#2D1C59]/25 bg-[#FBF9F5] transition group-hover:border-[#2D1C59]">
              {preview ? (
                <img src={preview} alt="Profile preview" className="h-full w-full object-cover" />
              ) : (
                <Camera className="h-7 w-7 text-[#2D1C59]/50" />
              )}
            </span>
            <input type="file" accept="image/*" onChange={handlePic} className="sr-only" />
          </label>
          <span className="text-xs text-[#586860]">
            {pic ? pic.name : "Add profile photo (optional)"}
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name">
            <input
              name="name"
              required
              autoComplete="name"
              placeholder="Sahil Sharma"
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
          </Field>

          <Field label="Email">
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
          </Field>

          <Field label="Mobile">
            <input
              name="mobile"
              type="tel"
              inputMode="numeric"
              required
              maxLength={10}
              autoComplete="tel"
              placeholder="10-digit number"
              value={form.mobile}
              onChange={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "");
                handleChange(e);
              }}
              className={inputClass}
            />
          </Field>

          <Field label="Gender">
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </Field>

          <Field label="Password">
            <div className="relative">
              <input
                name="password"
                type={showPass ? "text" : "password"}
                required
                autoComplete="new-password"
                placeholder="Min 6 characters"
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
          </Field>

          <Field label="Confirm password">
            <input
              name="confirmPassword"
              type={showPass ? "text" : "password"}
              required
              autoComplete="new-password"
              placeholder="Re-enter password"
              value={form.confirmPassword}
              onChange={handleChange}
              className={inputClass}
            />
          </Field>

          <div className="sm:col-span-2">
            <Field label="Full address">
              <input
                name="full_address"
                autoComplete="street-address"
                placeholder="House no, street, city"
                value={form.full_address}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>
          </div>
        </div>

        {shownError && (
          <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
            {shownError}
          </p>
        )}

        {success && (
          <p className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            Account created! Redirecting you to login...
          </p>
        )}

        <button
          type="submit"
          disabled={loading || success}
          className="w-full rounded-xl bg-[#2D1C59] py-3 text-sm font-medium text-white transition hover:bg-[#35146E] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>

        {loading && (
          <p className="text-center text-xs text-[#586860]">
            The first request can take 30–50 seconds while the server wakes up. Please wait.
          </p>
        )}

        <p className="text-center text-sm text-[#2A3630]/70">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-[#2D1C59] underline underline-offset-4">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
}