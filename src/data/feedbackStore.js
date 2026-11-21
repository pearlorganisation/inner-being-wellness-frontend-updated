// src/data/feedbackStore.js
// STATIC "database": localStorage me feedback save hoti hai.
// Status: "pending" (client ne bheji) -> "approved" (admin ne select kiya, public page par dikhegi)
//         ya "rejected". Backend aane par sirf is file ke functions badalne hain.
"use client";

import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";

const KEY = "ibw_feedback_v1";
const EVENT = "ibw-feedback-change";

// Pehle se maujood testimonials approved hain
const APPROVED_SEED = TESTIMONIALS.map((t) => ({
  ...t,
  rating: 5,
  email: "",
  status: "approved",
  createdAt: "2026-01-01T00:00:00.000Z",
}));

// Admin panel khali na dikhe isliye 2 sample pending
const PENDING_SEED = [
  {
    id: "p-1",
    name: "Rohan Mehta",
    email: "rohan@example.com",
    role: "Entrepreneur",
    location: "Mumbai",
    service: "Breakthrough Session",
    rating: 5,
    quote:
      "The breakthrough session gave me clarity on a decision I had been avoiding for months. Calm, respectful and very practical.",
    status: "pending",
    createdAt: "2026-02-10T10:00:00.000Z",
  },
  {
    id: "p-2",
    name: "Lena Fischer",
    email: "lena@example.com",
    role: "Teacher",
    location: "Berlin",
    service: "Aura Cleansing",
    rating: 4,
    quote:
      "I felt lighter after the session and slept better that week. Would have liked a little more follow-up guidance.",
    status: "pending",
    createdAt: "2026-02-12T14:30:00.000Z",
  },
];

const SEED = [...PENDING_SEED, ...APPROVED_SEED];

function read() {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : SEED;
  } catch {
    return SEED;
  }
}

function write(list) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(list));
  } catch {}
  window.dispatchEvent(new Event(EVENT));
}

/** Client form se nayi feedback (hamesha pending se shuru) */
export function submitFeedback(data) {
  const entry = {
    id: `f-${Date.now()}`,
    name: data.name.trim(),
    email: data.email.trim(),
    role: data.role.trim(),
    location: data.location.trim(),
    service: data.service,
    rating: data.rating,
    quote: data.message.trim(),
    image: "",
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  write([entry, ...read()]);
  return entry;
}

export function setFeedbackStatus(id, status) {
  write(read().map((f) => (f.id === id ? { ...f, status } : f)));
}

export function removeFeedback(id) {
  write(read().filter((f) => f.id !== id));
}

export function resetFeedbackDemo() {
  write(SEED);
}

/** items: saari feedback. approved wale public pages par dikhane hain. */
export function useFeedback() {
  const [items, setItems] = useState(SEED);

  useEffect(() => {
    const sync = () => setItems(read());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return { items, approved: items.filter((f) => f.status === "approved") };
}