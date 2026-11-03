// "use client";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchConsultations,
//   respondToConsultation,
//   removeConsultation,
// } from "@/store/adminConsultationSlice";

// const STATUSES = ["", "pending", "confirmed", "declined"];
// const LIMIT = 20;

// const badge = {
//   pending: "bg-amber-100 text-amber-800",
//   confirmed: "bg-emerald-100 text-emerald-800",
//   declined: "bg-red-100 text-red-800",
// };

// export default function AdminConsultationsPage() {
//   const dispatch = useDispatch();
//   const { items, loading, error } = useSelector((s) => s.adminConsultations);
//   const [status, setStatus] = useState("pending");
//   const [page, setPage] = useState(1);
//   const [modal, setModal] = useState(null); // {item, action}
//   const [saving, setSaving] = useState(false);
//   const [formError, setFormError] = useState("");
//   const [f, setF] = useState({ session_date: "", meeting_details: "", admin_notes: "" });

//   const load = () => dispatch(fetchConsultations({ page, limit: LIMIT, status }));
//   useEffect(() => {
//     load();
//     // eslint-disable-next-line
//   }, [page, status]);

//   const closeModal = () => {
//     setModal(null);
//     setFormError("");
//     setF({ session_date: "", meeting_details: "", admin_notes: "" });
//   };

//   const submit = async () => {
//     if (modal.action === "confirm" && !f.session_date) {
//       return setFormError("Please choose a session date and time.");
//     }
//     setSaving(true);
//     setFormError("");

//     const payload =
//       modal.action === "confirm"
//         ? {
//             action: "confirm",
//             session_date: new Date(f.session_date).toISOString(),
//             meeting_details: f.meeting_details,
//             admin_notes: f.admin_notes,
//           }
//         : { action: "decline", admin_notes: f.admin_notes };

//     const r = await dispatch(respondToConsultation({ id: modal.item.id, payload }));
//     setSaving(false);

//     if (r.error) return setFormError(r.payload || "Could not save. Please try again.");
//     closeModal();
//     load();
//   };

//   const del = async (id) => {
//     if (!confirm("Delete this consultation?")) return;
//     const r = await dispatch(removeConsultation(id));
//     if (r.error) alert(r.payload || "Could not delete.");
//   };

//   const input = "w-full rounded border border-gray-300 p-2 text-sm";

//   return (
//     <div className="p-4 sm:p-6">
//       <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
//         <h1 className="text-2xl font-semibold">Consultations</h1>
//         <div className="flex items-center gap-2">
//           <button
//             onClick={load}
//             className="rounded border px-3 py-1 text-sm hover:bg-gray-50"
//           >
//             Refresh
//           </button>
//           <select
//             value={status}
//             onChange={(e) => {
//               setPage(1);
//               setStatus(e.target.value);
//             }}
//             className="rounded border px-3 py-1 text-sm"
//           >
//             {STATUSES.map((s) => (
//               <option key={s} value={s}>
//                 {s ? s[0].toUpperCase() + s.slice(1) : "All"}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {loading && <p className="mb-2 text-sm text-gray-500">Loading...</p>}
//       {error && (
//         <div className="mb-3 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
//           {error}
//         </div>
//       )}

//       <div className="overflow-x-auto rounded-lg border bg-white">
//         <table className="w-full min-w-[720px] text-left text-sm">
//           <thead className="bg-gray-50">
//             <tr>
//               {["Name", "Email", "Phone", "Interest", "Format", "Status", "Actions"].map((h) => (
//                 <th key={h} className="p-3 font-medium">
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((c) => (
//               <tr key={c.id} className="border-t align-top">
//                 <td className="p-3">{c.full_name}</td>
//                 <td className="p-3">{c.email}</td>
//                 <td className="p-3">{c.phone || "—"}</td>
//                 <td className="p-3">{c.interest}</td>
//                 <td className="p-3">{c.session_format}</td>
//                 <td className="p-3">
//                   <span
//                     className={`rounded-full px-2 py-0.5 text-xs capitalize ${
//                       badge[c.status] || "bg-gray-100 text-gray-700"
//                     }`}
//                   >
//                     {c.status}
//                   </span>
//                 </td>
//                 <td className="space-x-3 whitespace-nowrap p-3">
//                   <button
//                     onClick={() => setModal({ item: c, action: "confirm" })}
//                     className="text-emerald-600 hover:underline"
//                   >
//                     Confirm
//                   </button>
//                   <button
//                     onClick={() => setModal({ item: c, action: "decline" })}
//                     className="text-amber-600 hover:underline"
//                   >
//                     Decline
//                   </button>
//                   <button onClick={() => del(c.id)} className="text-red-600 hover:underline">
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {!loading && !items.length && !error && (
//               <tr>
//                 <td colSpan={7} className="p-6 text-center text-gray-500">
//                   No consultations found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       <div className="mt-4 flex items-center gap-2">
//         <button
//           disabled={page === 1}
//           onClick={() => setPage(page - 1)}
//           className="rounded border px-3 py-1 text-sm disabled:opacity-50"
//         >
//           Prev
//         </button>
//         <span className="px-2 py-1 text-sm">Page {page}</span>
//         <button
//           disabled={items.length < LIMIT}
//           onClick={() => setPage(page + 1)}
//           className="rounded border px-3 py-1 text-sm disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>

//       {modal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <div className="w-full max-w-md space-y-3 rounded-xl bg-white p-6">
//             <h2 className="text-lg font-semibold capitalize">
//               {modal.action} — {modal.item.full_name}
//             </h2>

//             {modal.action === "confirm" && (
//               <>
//                 <input
//                   type="datetime-local"
//                   className={input}
//                   value={f.session_date}
//                   onChange={(e) => setF({ ...f, session_date: e.target.value })}
//                 />
//                 <input
//                   placeholder="Meeting details (e.g. Google Meet link)"
//                   className={input}
//                   value={f.meeting_details}
//                   onChange={(e) => setF({ ...f, meeting_details: e.target.value })}
//                 />
//               </>
//             )}

//             <textarea
//               placeholder="Admin notes"
//               rows={3}
//               className={input}
//               value={f.admin_notes}
//               onChange={(e) => setF({ ...f, admin_notes: e.target.value })}
//             />

//             {formError && <p className="text-sm text-red-600">{formError}</p>}

//             <div className="flex justify-end gap-2">
//               <button onClick={closeModal} className="rounded border px-4 py-1 text-sm">
//                 Cancel
//               </button>
//               <button
//                 onClick={submit}
//                 disabled={saving}
//                 className="rounded bg-emerald-600 px-4 py-1 text-sm text-white disabled:opacity-60"
//               >
//                 {saving ? "Saving..." : "Submit"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }










"use client";

import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchConsultations,
  respondToConsultation,
  removeConsultation,
} from "@/store/adminConsultationSlice";

const STATUS_FILTERS = [
  { value: "", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "declined", label: "Declined" },
];
const LIMIT = 20;
const EMPTY_FORM = { session_date: "", meeting_details: "", admin_notes: "" };

const BADGE = {
  pending: "bg-[#FBEFD3] text-[#8A6411]",
  confirmed: "bg-emerald-50 text-emerald-700",
  declined: "bg-red-50 text-red-700",
};

// text-base on mobile: iOS input focus pe zoom nahi karta
const inputCls =
  "w-full rounded-xl border border-[#E8E3D9] bg-white px-4 py-3 text-base text-[#1F1B44] outline-none focus:border-[#4B3FA0] focus:ring-2 focus:ring-[#4B3FA0]/15 sm:py-2.5 sm:text-sm";

const fmtDate = (iso) => {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(d);
};

// datetime-local ke min attribute ke liye (local time me)
const nowLocalInput = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 16);
};

const pretty = (v) => (v || "—").replace(/_/g, " ");

export default function AdminConsultationsPage() {
  const dispatch = useDispatch();
  const { items = [], loading = false, error = null } =
    useSelector((s) => s.adminConsultations) ?? {};

  const [status, setStatus] = useState("pending");
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(null); // { item, action: "confirm" | "decline" }
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");
  const [notice, setNotice] = useState(null); // { type: "ok" | "err", text }
  const [f, setF] = useState(EMPTY_FORM);

  const load = useCallback(
    () => dispatch(fetchConsultations({ page, limit: LIMIT, status })),
    [dispatch, page, status]
  );

  useEffect(() => {
    load();
  }, [load]);

  // Success message 4 second baad hat jaye
  useEffect(() => {
    if (notice?.type !== "ok") return;
    const t = setTimeout(() => setNotice(null), 4000);
    return () => clearTimeout(t);
  }, [notice]);

  const closeModal = useCallback(() => {
    setModal(null);
    setFormError("");
    setF(EMPTY_FORM);
  }, []);

  const dialogOpen = Boolean(modal || deleteTarget);

  // Dialog khula ho: Escape se band, background scroll lock
  useEffect(() => {
    if (!dialogOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key !== "Escape" || saving) return;
      closeModal();
      setDeleteTarget(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [dialogOpen, saving, closeModal]);

  const openModal = (item, action) => {
    setFormError("");
    setF({ ...EMPTY_FORM, admin_notes: item.admin_notes || "" });
    setModal({ item, action });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (saving || !modal) return;

    let payload;
    if (modal.action === "confirm") {
      if (!f.session_date) return setFormError("Please choose a session date and time.");
      const when = new Date(f.session_date);
      if (Number.isNaN(when.getTime())) return setFormError("That date isn't valid.");
      if (when.getTime() < Date.now()) return setFormError("Session time can't be in the past.");
      payload = {
        action: "confirm",
        session_date: when.toISOString(),
        meeting_details: f.meeting_details.trim(),
        admin_notes: f.admin_notes.trim(),
      };
    } else {
      payload = { action: "decline", admin_notes: f.admin_notes.trim() };
    }

    setSaving(true);
    setFormError("");
    const r = await dispatch(respondToConsultation({ id: modal.item.id, payload }));
    setSaving(false);

    if (r.error) return setFormError(r.payload || "Could not save. Please try again.");

    const name = modal.item.full_name;
    setNotice({
      type: "ok",
      text: modal.action === "confirm" ? `Consultation with ${name} confirmed.` : `Consultation with ${name} declined.`,
    });
    closeModal();
    load();
  };

  const confirmDelete = async () => {
    if (!deleteTarget || saving) return;
    setSaving(true);
    const r = await dispatch(removeConsultation(deleteTarget.id));
    setSaving(false);

    if (r.error) {
      setNotice({ type: "err", text: r.payload || "Could not delete. Please try again." });
      setDeleteTarget(null);
      return;
    }
    setNotice({ type: "ok", text: "Consultation deleted." });
    setDeleteTarget(null);
    // Page khali ho gaya to pichle page pe, warna wahi page refresh
    if (items.length <= 1 && page > 1) setPage((p) => p - 1);
    else load();
  };

  const changeStatus = (value) => {
    setPage(1);
    setStatus(value);
  };

  const showSkeleton = loading && items.length === 0;
  const dim = loading && items.length ? "opacity-60" : "";

  return (
    <div className="mx-auto w-full max-w-[1400px] p-4 sm:p-6 lg:p-10">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h1 className="font-serif text-2xl text-[#1F1B44] sm:text-3xl">Consultations</h1>
          <p className="mt-1 text-sm text-[#7A7589]">
            Review booking requests, confirm a session time or decline politely.
          </p>
        </div>
        <button
          onClick={load}
          disabled={loading}
          className="min-h-[44px] w-full rounded-xl border border-[#E8E3D9] bg-white px-4 py-2 text-sm font-medium text-[#1F1B44] transition hover:border-[#1F1B44] disabled:opacity-60 sm:w-auto"
        >
          {loading ? "Refreshing…" : "Refresh"}
        </button>
      </div>

      {/* Status filter: mobile pe ek line me scroll, bade screen pe wrap */}
      <div
        className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mt-6 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="group"
        aria-label="Filter by status"
      >
        {STATUS_FILTERS.map((s) => (
          <button
            key={s.value || "all"}
            onClick={() => changeStatus(s.value)}
            aria-pressed={status === s.value}
            className={`min-h-[40px] shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition ${
              status === s.value
                ? "border-[#1F1B44] bg-[#1F1B44] text-white"
                : "border-[#E8E3D9] bg-white text-[#7A7589] hover:border-[#4B3FA0] hover:text-[#4B3FA0]"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Notices */}
      <div aria-live="polite">
        {notice && (
          <div
            className={`mt-4 flex items-start justify-between gap-3 rounded-xl border px-4 py-3 text-sm ${
              notice.type === "ok"
                ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            <span className="min-w-0 break-words">{notice.text}</span>
            <button onClick={() => setNotice(null)} aria-label="Dismiss" className="shrink-0 px-1 font-medium">✕</button>
          </div>
        )}
        {error && (
          <div role="alert" className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <span className="min-w-0 break-words">{error}</span>
            <button onClick={load} className="shrink-0 font-medium underline">Retry</button>
          </div>
        )}
      </div>

      {/* Desktop table (lg+) */}
      <div className={`mt-6 hidden overflow-x-auto rounded-2xl border border-[#EFEADF] bg-white shadow-sm lg:block ${dim}`}>
        <table className="w-full text-left text-sm">
          <thead className="bg-[#FAF8F3] text-xs uppercase tracking-wide text-[#7A7589]">
            <tr>
              {["Client", "Contact", "Interest", "Format", "Status", "Actions"].map((h, i) => (
                <th key={h} className={`px-5 py-3 ${i === 5 ? "text-right" : ""}`}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {showSkeleton &&
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="border-t border-[#F3EFE6]">
                  <td colSpan={6} className="px-5 py-4">
                    <div className="h-5 animate-pulse rounded-lg bg-[#F3EFE6]" />
                  </td>
                </tr>
              ))}

            {!loading && items.length === 0 && !error && (
              <tr>
                <td colSpan={6} className="px-5 py-12 text-center text-[#7A7589]">
                  No {status || ""} consultations found.
                </td>
              </tr>
            )}

            {items.map((c) => (
              <tr key={c.id} className="border-t border-[#F3EFE6] align-top">
                <td className="px-5 py-4">
                  <div className="font-medium text-[#1F1B44]">{c.full_name}</div>
                  <Details c={c} />
                </td>
                <td className="px-5 py-4 text-[#4a4660]">
                  <a href={`mailto:${c.email}`} className="break-all hover:underline">{c.email}</a>
                  {c.phone && (
                    <div>
                      <a href={`tel:${c.phone}`} className="text-[#7A7589] hover:underline">{c.phone}</a>
                    </div>
                  )}
                </td>
                <td className="px-5 py-4 capitalize text-[#4a4660]">{pretty(c.interest)}</td>
                <td className="px-5 py-4 capitalize text-[#4a4660]">{pretty(c.session_format)}</td>
                <td className="px-5 py-4"><StatusPill status={c.status} /></td>
                <td className="whitespace-nowrap px-5 py-4 text-right">
                  <Actions c={c} onOpen={openModal} onDelete={setDeleteTarget} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards (< lg): phone pe 1 column, tablet pe 2 */}
      <div className={`mt-6 grid gap-3 sm:gap-4 md:grid-cols-2 lg:hidden ${dim}`}>
        {showSkeleton &&
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded-2xl bg-[#F3EFE6]" />
          ))}

        {!loading && items.length === 0 && !error && (
          <div className="rounded-2xl border border-[#EFEADF] bg-white px-5 py-10 text-center text-sm text-[#7A7589] md:col-span-2">
            No {status || ""} consultations found.
          </div>
        )}

        {items.map((c) => (
          <article key={c.id} className="flex min-w-0 flex-col rounded-2xl border border-[#EFEADF] bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="break-words font-medium text-[#1F1B44]">{c.full_name}</div>
                <a href={`mailto:${c.email}`} className="block break-all text-sm text-[#4a4660]">{c.email}</a>
                {c.phone && <a href={`tel:${c.phone}`} className="text-sm text-[#7A7589]">{c.phone}</a>}
              </div>
              <StatusPill status={c.status} />
            </div>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm capitalize text-[#4a4660]">
              <span>{pretty(c.interest)}</span>
              <span className="text-[#7A7589]">{pretty(c.session_format)}</span>
            </div>

            <Details c={c} wrap />

            <div className="mt-auto border-t border-[#F3EFE6] pt-3">
              <Actions c={c} onOpen={openModal} onDelete={setDeleteTarget} touch />
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-5 flex items-center justify-between gap-3 sm:justify-start">
        <button
          disabled={page === 1 || loading}
          onClick={() => setPage((p) => p - 1)}
          className="min-h-[44px] rounded-xl border border-[#E8E3D9] bg-white px-5 py-1.5 text-sm text-[#1F1B44] transition hover:border-[#1F1B44] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm text-[#7A7589]">Page {page}</span>
        <button
          disabled={items.length < LIMIT || loading}
          onClick={() => setPage((p) => p + 1)}
          className="min-h-[44px] rounded-xl border border-[#E8E3D9] bg-white px-5 py-1.5 text-sm text-[#1F1B44] transition hover:border-[#1F1B44] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Confirm / Decline: phone pe bottom sheet, bade screen pe centered modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center sm:p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && !saving) closeModal();
          }}
        >
          <form
            onSubmit={submit}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consult-modal-title"
            className="max-h-[92dvh] w-full max-w-md space-y-4 overflow-y-auto rounded-t-2xl bg-white p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-xl sm:rounded-2xl sm:p-6"
          >
            <h2 id="consult-modal-title" className="font-serif text-2xl text-[#1F1B44]">
              {modal.action === "confirm" ? "Confirm session" : "Decline request"}
              <span className="mt-1 block break-words font-sans text-sm font-normal text-[#7A7589]">
                {modal.item.full_name}
              </span>
            </h2>

            {modal.action === "confirm" && (
              <>
                <div>
                  <label htmlFor="c-date" className="mb-1 block text-xs font-medium text-[#7A7589]">
                    Session date &amp; time
                  </label>
                  <input
                    id="c-date"
                    type="datetime-local"
                    required
                    autoFocus
                    min={nowLocalInput()}
                    className={inputCls}
                    value={f.session_date}
                    onChange={(e) => setF({ ...f, session_date: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="c-meet" className="mb-1 block text-xs font-medium text-[#7A7589]">
                    Meeting details <span className="text-[#A39EB5]">(optional)</span>
                  </label>
                  <input
                    id="c-meet"
                    placeholder="e.g. Google Meet link or clinic address"
                    className={inputCls}
                    value={f.meeting_details}
                    onChange={(e) => setF({ ...f, meeting_details: e.target.value })}
                  />
                </div>
              </>
            )}

            <div>
              <label htmlFor="c-notes" className="mb-1 block text-xs font-medium text-[#7A7589]">
                Admin notes <span className="text-[#A39EB5]">(optional)</span>
              </label>
              <textarea
                id="c-notes"
                rows={3}
                autoFocus={modal.action === "decline"}
                className={inputCls}
                value={f.admin_notes}
                onChange={(e) => setF({ ...f, admin_notes: e.target.value })}
              />
            </div>

            {formError && (
              <p role="alert" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{formError}</p>
            )}

            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
              <button
                type="button"
                onClick={closeModal}
                disabled={saving}
                className="min-h-[44px] rounded-xl border border-[#E8E3D9] px-4 py-2 text-sm text-[#1F1B44] hover:bg-gray-50 disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className={`min-h-[44px] rounded-xl px-5 py-2 text-sm font-medium text-white disabled:opacity-60 ${
                  modal.action === "confirm" ? "bg-[#1F1B44] hover:bg-[#2c2760]" : "bg-amber-600 hover:bg-amber-700"
                }`}
              >
                {saving ? "Saving…" : modal.action === "confirm" ? "Confirm session" : "Decline request"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete confirm */}
      {deleteTarget && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center sm:p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && !saving) setDeleteTarget(null);
          }}
        >
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="consult-del-title"
            className="w-full max-w-sm rounded-t-2xl bg-white p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-xl sm:rounded-2xl sm:p-6"
          >
            <h2 id="consult-del-title" className="font-serif text-2xl text-[#1F1B44]">Delete consultation?</h2>
            <p className="mt-2 text-sm text-[#4a4660]">
              The request from <span className="font-medium">{deleteTarget.full_name}</span> will be
              permanently removed. This can't be undone.
            </p>
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                disabled={saving}
                className="min-h-[44px] rounded-xl border border-[#E8E3D9] px-4 py-2 text-sm text-[#1F1B44] hover:bg-gray-50 disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                disabled={saving}
                className="min-h-[44px] rounded-xl bg-red-600 px-5 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-60"
              >
                {saving ? "Deleting…" : "Yes, delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- small pieces ---------- */

function StatusPill({ status }) {
  return (
    <span className={`inline-block shrink-0 rounded-full px-3 py-1 text-xs font-medium capitalize ${BADGE[status] || "bg-gray-100 text-gray-700"}`}>
      {status || "—"}
    </span>
  );
}

// Session ka time/link aur admin notes. wrap=true (cards) me poora text, table me truncate
function Details({ c, wrap = false }) {
  const when = fmtDate(c.session_date);
  if (!when && !c.meeting_details && !c.admin_notes) return null;
  const line = wrap ? "break-words" : "max-w-[260px] truncate";
  return (
    <div className="mt-1.5 space-y-0.5 text-xs text-[#7A7589]">
      {when && <div>📅 {when}</div>}
      {c.meeting_details && <div className={line} title={c.meeting_details}>🔗 {c.meeting_details}</div>}
      {c.admin_notes && <div className={line} title={c.admin_notes}>📝 {c.admin_notes}</div>}
    </div>
  );
}

// Status ke hisaab se kaam ke actions. touch=true (cards): bade, tappable buttons
function Actions({ c, onOpen, onDelete, touch = false }) {
  const base = touch
    ? "min-h-[44px] flex-1 rounded-xl border px-3 text-sm font-medium transition"
    : "text-sm font-medium hover:underline";

  return (
    <div className={touch ? "flex flex-wrap gap-2" : "flex flex-wrap items-center justify-end gap-x-4 gap-y-1"}>
      {c.status !== "confirmed" && (
        <button
          onClick={() => onOpen(c, "confirm")}
          className={`${base} ${touch ? "border-emerald-200 text-emerald-700 hover:bg-emerald-50" : "text-emerald-700"}`}
        >
          Confirm
        </button>
      )}
      {c.status !== "declined" && (
        <button
          onClick={() => onOpen(c, "decline")}
          className={`${base} ${touch ? "border-amber-200 text-amber-700 hover:bg-amber-50" : "text-amber-700"}`}
        >
          Decline
        </button>
      )}
      <button
        onClick={() => onDelete(c)}
        className={`${base} ${touch ? "border-red-200 text-red-600 hover:bg-red-50" : "text-red-600"}`}
      >
        Delete
      </button>
    </div>
  );
}