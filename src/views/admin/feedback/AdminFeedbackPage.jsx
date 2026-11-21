"use client";

import { useEffect, useRef, useState } from "react";
import Stars from "@/components/feedback/Stars";
import {
  getAdminFeedbacksApi,
  updateAdminFeedbackApi,
  setFeedbackStatusApi,
  deleteAdminFeedbackApi,
  rowsOf,
  errMsg,
  fmtDate,
  customerOf,
} from "@/services/feedbackService";

const LIMIT = 10;

const inputCls =
  "w-full rounded-lg border border-[#EAE5DD] bg-white px-3 py-2.5 text-sm text-[#1F1B44] outline-none transition focus:border-[#13382C] focus:ring-2 focus:ring-[#13382C]/15";

function Avatar({ name, pic }) {
  const [broken, setBroken] = useState(false);
  if (pic && !broken) {
    return (
      <img
        src={pic}
        alt={name}
        onError={() => setBroken(true)}
        referrerPolicy="no-referrer"
        className="h-9 w-9 shrink-0 rounded-full object-cover"
      />
    );
  }
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E4ECE6] text-sm font-semibold text-[#13382C]">
      {(name || "C").charAt(0).toUpperCase()}
    </span>
  );
}

export default function AdminFeedbackPage() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reload, setReload] = useState(0);

  // filters
  const [status, setStatus] = useState("all"); // all | true | false
  const [rating, setRating] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  // modal / delete / toast
  const [editing, setEditing] = useState(null); // feedback object
  const [form, setForm] = useState(null);
  const [formError, setFormError] = useState("");
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const showToast = (type, text) => {
    setToast({ type, text });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  /* ---------- fetch ---------- */
  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getAdminFeedbacksApi({
          page,
          limit: LIMIT,
          is_active: status === "all" ? undefined : status,
          rating: rating || undefined,
          search: search || undefined,
        });
        if (!alive) return;
        const rows = rowsOf(data);
        setItems(rows);
        setTotal(data?.total ?? rows.length);
        setTotalPages(data?.total_pages || 1);
      } catch (e) {
        if (alive) setError(errMsg(e));
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [page, status, rating, search, reload]);

  const refresh = () => setReload((n) => n + 1);

  /* ---------- filters ---------- */
  const applySearch = (e) => {
    e.preventDefault();
    setPage(1);
    setSearch(searchInput.trim());
  };

  const resetFilters = () => {
    setStatus("all");
    setRating("");
    setSearchInput("");
    setSearch("");
    setPage(1);
  };

  /* ---------- approve / hide ---------- */
  const toggleStatus = async (f) => {
    try {
      await setFeedbackStatusApi(f.id, !f.is_active);
      setItems((prev) =>
        prev.map((x) =>
          x.id === f.id ? { ...x, is_active: !f.is_active } : x,
        ),
      );
      showToast(
        "success",
        f.is_active ? "Feedback hidden" : "Feedback approved",
      );
    } catch (e) {
      showToast("error", errMsg(e));
    }
  };

  /* ---------- edit ---------- */
  const openEdit = (f) => {
    setEditing(f);
    setFormError("");
    setForm({
      rating: f.rating || 5,
      title: f.title || "",
      comment: f.comment || "",
      is_active: !!f.is_active,
      admin_notes: f.admin_notes || "",
    });
  };

  const closeEdit = () => {
    if (saving) return;
    setEditing(null);
    setForm(null);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!form.comment.trim()) return setFormError("Comment is required");

    setSaving(true);
    setFormError("");
    try {
      await updateAdminFeedbackApi(editing.id, {
        rating: Number(form.rating),
        title: form.title.trim(),
        comment: form.comment.trim(),
        is_active: form.is_active,
        admin_notes: form.admin_notes.trim(),
      });
      setEditing(null);
      setForm(null);
      showToast("success", "Feedback updated");
      refresh();
    } catch (err) {
      setFormError(errMsg(err));
    } finally {
      setSaving(false);
    }
  };

  /* ---------- delete ---------- */
  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await deleteAdminFeedbackApi(deleteTarget.id);
      showToast("success", "Feedback deleted");
      if (items.length === 1 && page > 1) setPage(page - 1);
      else refresh();
    } catch (e) {
      showToast("error", errMsg(e));
    } finally {
      setDeleting(false);
      setDeleteTarget(null);
    }
  };

  const hasFilters = status !== "all" || rating || search;

  return (
    <div className="p-6 pb-24">
      {/* Toast */}
      {toast && (
        <div
          className={`fixed right-6 top-6 z-[60] rounded-lg px-4 py-3 text-sm font-medium text-white shadow-lg ${
            toast.type === "success" ? "bg-[#13382C]" : "bg-red-600"
          }`}
        >
          {toast.text}
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h1 className="font-serif text-3xl text-[#1F1B44]">Feedback</h1>
        <p className="mt-1 text-sm text-[#6B6673]">
          {total} total · Testimonials will be displayed on the website only
          after approval.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <form onSubmit={applySearch} className="flex flex-1 gap-2 sm:max-w-sm">
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search feedback, name or email"
            className={inputCls}
          />
          <button
            type="submit"
            className="rounded-lg bg-[#13382C] px-4 text-sm font-semibold text-white transition hover:bg-[#1E4839]"
          >
            Search
          </button>
        </form>

        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          className={`${inputCls} w-auto`}
        >
          <option value="all">All status</option>
          <option value="true">Approved</option>
          <option value="false">Pending / Hidden</option>
        </select>

        <select
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
            setPage(1);
          }}
          className={`${inputCls} w-auto`}
        >
          <option value="">All ratings</option>
          {[5, 4, 3, 2, 1].map((n) => (
            <option key={n} value={n}>
              {n} star{n > 1 ? "s" : ""}
            </option>
          ))}
        </select>

        {hasFilters && (
          <button
            onClick={resetFilters}
            className="text-sm font-semibold text-[#13382C] underline"
          >
            Clear
          </button>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <span>{error}</span>
          <button onClick={refresh} className="font-semibold underline">
            Retry
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-[#EAE5DD] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead className="bg-[#E4ECE6] text-[#1F1B44]">
              <tr>
                <th className="px-5 py-3.5 font-semibold">Customer</th>
                <th className="w-36 px-5 py-3.5 font-semibold">Rating</th>
                <th className="px-5 py-3.5 font-semibold">Feedback</th>
                <th className="w-32 px-5 py-3.5 font-semibold">Status</th>
                <th className="w-52 px-5 py-3.5 text-right font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className={loading && items.length ? "opacity-50" : ""}>
              {loading && items.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-14 text-center text-[#6B6673]"
                  >
                    Loading feedback...
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-14 text-center text-[#6B6673]"
                  >
                    No feedback found.
                  </td>
                </tr>
              ) : (
                items.map((f) => {
                  const c = customerOf(f);
                  return (
                    <tr
                      key={f.id}
                      className="border-t border-[#EAE5DD] align-top transition hover:bg-[#E4ECE6]/40"
                    >
                      {/* Customer */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar name={c.name} pic={c.pic} />
                          <div className="min-w-0">
                            <p className="truncate font-medium text-[#1F1B44]">
                              {c.name}
                            </p>
                            {c.email && (
                              <p className="truncate text-xs text-[#6B6673]">
                                {c.email}
                              </p>
                            )}
                            {c.mobile && (
                              <p className="text-xs text-[#6B6673]">
                                {c.mobile}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Rating */}
                      <td className="px-5 py-4">
                        <Stars value={f.rating} size="h-4 w-4" />
                        <p className="mt-1 text-xs text-[#6B6673]">
                          {fmtDate(f.created_at)}
                        </p>
                      </td>

                      {/* Feedback */}
                      <td className="max-w-sm px-5 py-4">
                        {f.title && (
                          <p className="font-medium text-[#1F1B44]">
                            {f.title}
                          </p>
                        )}
                        <p
                          className="line-clamp-2 text-[#6B6673]"
                          title={f.comment}
                        >
                          {f.comment}
                        </p>
                        {f.admin_notes && (
                          <p className="mt-1 text-xs italic text-[#8A6A1F]">
                            Note: {f.admin_notes}
                          </p>
                        )}
                      </td>

                      {/* Status */}
                      <td className="px-5 py-4">
                        <button
                          onClick={() => toggleStatus(f)}
                          title={
                            f.is_active ? "Click to hide" : "Click to approve"
                          }
                          className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                            f.is_active
                              ? "bg-[#D2E3D8] text-[#13382C] hover:bg-[#c2d8c9]"
                              : "bg-[#F5ECD7] text-[#8A6A1F] hover:bg-[#efe2c0]"
                          }`}
                        >
                          {f.is_active ? "Approved" : "Pending"}
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-2 whitespace-nowrap">
                          <button
                            onClick={() => openEdit(f)}
                            className="rounded-md border border-[#13382C]/30 px-3 py-1 text-xs font-semibold text-[#13382C] transition hover:bg-[#13382C] hover:text-white"
                          >
                            View / Edit
                          </button>
                          <button
                            onClick={() => setDeleteTarget(f)}
                            className="rounded-md border border-red-200 px-3 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
        <span className="text-[#6B6673]">
          {total === 0
            ? "No results"
            : `Showing ${(page - 1) * LIMIT + 1}–${Math.min(page * LIMIT, total)} of ${total}`}
        </span>
        <div className="flex items-center gap-3">
          <button
            disabled={page <= 1 || loading}
            onClick={() => setPage(page - 1)}
            className="rounded-lg border border-[#EAE5DD] bg-white px-4 py-2 text-[#1F1B44] transition hover:bg-[#E4ECE6] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Prev
          </button>
          <span className="text-[#6B6673]">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page >= totalPages || loading}
            onClick={() => setPage(page + 1)}
            className="rounded-lg border border-[#EAE5DD] bg-white px-4 py-2 text-[#1F1B44] transition hover:bg-[#E4ECE6] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      {/* Edit modal */}
      {editing && form && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-4"
          onMouseDown={(e) => e.target === e.currentTarget && closeEdit()}
        >
          <form
            onSubmit={handleSave}
            className="my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
          >
            <h2 className="mb-4 font-serif text-2xl text-[#1F1B44]">
              Feedback Details
            </h2>

            {/* Customer info (read-only) */}
            {(() => {
              const c = customerOf(editing);
              return (
                <div className="mb-5 flex items-center gap-3 rounded-xl bg-[#E4ECE6]/60 p-3">
                  <Avatar name={c.name} pic={c.pic} />
                  <div className="min-w-0 text-sm">
                    <p className="font-semibold text-[#1F1B44]">{c.name}</p>
                    <p className="truncate text-xs text-[#6B6673]">
                      {[c.email, c.mobile].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                </div>
              );
            })()}

            {formError && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {formError}
              </div>
            )}

            <label className="mb-1.5 block text-sm font-medium text-[#1F1B44]">
              Rating
            </label>
            <div className="mb-4">
              <Stars
                value={Number(form.rating)}
                onChange={(n) => setForm({ ...form, rating: n })}
                size="h-7 w-7"
              />
            </div>

            <label className="mb-1.5 block text-sm font-medium text-[#1F1B44]">
              Title
            </label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className={`${inputCls} mb-4`}
            />

            <label className="mb-1.5 block text-sm font-medium text-[#1F1B44]">
              Comment <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              value={form.comment}
              onChange={(e) => setForm({ ...form, comment: e.target.value })}
              className={`${inputCls} mb-4 resize-none`}
            />

            <label className="mb-1.5 block text-sm font-medium text-[#1F1B44]">
              Admin notes <span className="text-[#6B6673]">(internal)</span>
            </label>
            <textarea
              rows={2}
              value={form.admin_notes}
              onChange={(e) =>
                setForm({ ...form, admin_notes: e.target.value })
              }
              placeholder="Only admins can see this"
              className={`${inputCls} mb-4 resize-none`}
            />

            <label className="mb-2 flex cursor-pointer items-center gap-2 text-sm text-[#1F1B44]">
              <input
                type="checkbox"
                checked={form.is_active}
                onChange={(e) =>
                  setForm({ ...form, is_active: e.target.checked })
                }
                className="h-4 w-4 accent-[#13382C]"
              />
              Approved
            </label>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeEdit}
                disabled={saving}
                className="rounded-lg border border-[#EAE5DD] px-5 py-2.5 text-sm font-medium text-[#1F1B44] transition hover:bg-gray-50 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="rounded-lg bg-[#13382C] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1E4839] disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save changes"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete confirm */}
      {deleteTarget && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onMouseDown={(e) =>
            e.target === e.currentTarget && !deleting && setDeleteTarget(null)
          }
        >
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <h3 className="mb-2 font-serif text-xl text-[#1F1B44]">
              Delete feedback?
            </h3>
            <p className="mb-6 text-sm text-[#6B6673]">
              <span className="font-semibold text-[#1F1B44]">
                {customerOf(deleteTarget).name}
              </span>{" "}
              The feedback will be permanently deleted.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                disabled={deleting}
                className="rounded-lg border border-[#EAE5DD] px-5 py-2.5 text-sm font-medium text-[#1F1B44] transition hover:bg-gray-50 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
