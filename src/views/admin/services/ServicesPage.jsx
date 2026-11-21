"use client";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchServices,
  createService,
  updateService,
  deleteService,
  clearServicesError,
} from "@/store/adminServicesSlice";

const LIMIT = 10;
const emptyForm = { name: "", description: "", sort_order: 1, is_active: true };

const inputCls =
  "w-full rounded-lg border border-[#EAE5DD] bg-white px-3 py-2.5 text-sm text-[#1F1B44] outline-none transition focus:border-[#13382C] focus:ring-2 focus:ring-[#13382C]/15";

export default function ServicesPage() {
  const dispatch = useDispatch();
  const { items, page, totalPages, total, loading, saving, error } =
    useSelector((s) => s.adminServices);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [formError, setFormError] = useState("");
  const [deleteTarget, setDeleteTarget] = useState(null); // { id, name }
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState(null); // { type, text }
  const toastTimer = useRef(null);

  const showToast = (type, text) => {
    setToast({ type, text });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    dispatch(fetchServices({ page: 1, limit: LIMIT }));
    return () => clearTimeout(toastTimer.current);
  }, [dispatch]);

  const load = (p = page) => dispatch(fetchServices({ page: p, limit: LIMIT }));

  /* ---------- modal ---------- */
  const openAdd = () => {
    dispatch(clearServicesError());
    setFormError("");
    setEditingId(null);
    setForm({ ...emptyForm, sort_order: total + 1 });
    setModalOpen(true);
  };

  const openEdit = (item) => {
    dispatch(clearServicesError());
    setFormError("");
    setEditingId(item.id);
    setForm({
      name: item.name,
      description: item.description || "",
      sort_order: item.sort_order,
      is_active: item.is_active,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    if (saving) return;
    setModalOpen(false);
    setFormError("");
    dispatch(clearServicesError());
  };

  /* ---------- create / update ---------- */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = form.name.trim();
    const sort = Number(form.sort_order);

    if (!name) return setFormError("Service name is required");
    if (!Number.isInteger(sort) || sort < 1)
      return setFormError("Sort order must be a number (1 or more)");

    setFormError("");
    const payload = {
      name,
      description: form.description.trim(),
      sort_order: sort,
      ...(editingId ? { is_active: form.is_active } : {}),
    };

    const action = editingId
      ? await dispatch(updateService({ id: editingId, payload }))
      : await dispatch(createService(payload));

    if (action.error) return; // error redux state se modal me dikhega

    setModalOpen(false);
    showToast("success", editingId ? "Service updated" : "Service created");
    load(page); // current page refresh
  };

  /* ---------- active toggle ---------- */
  const toggleActive = async (item) => {
    const action = await dispatch(
      updateService({ id: item.id, payload: { is_active: !item.is_active } }),
    );
    if (action.error) showToast("error", action.payload || "Update failed");
    else
      showToast(
        "success",
        `Service ${!item.is_active ? "activated" : "deactivated"}`,
      );
  };

  /* ---------- delete ---------- */
  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    const action = await dispatch(deleteService(deleteTarget.id));
    setDeleting(false);
    setDeleteTarget(null);

    if (action.error) {
      showToast("error", action.payload || "Delete failed");
      return;
    }
    showToast("success", "Service deleted");
    // page pe sirf 1 item tha to pichle page pe jao
    const nextPage = items.length === 1 && page > 1 ? page - 1 : page;
    load(nextPage);
  };

  return (
    <div className="p-6 pb-28">
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
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-serif text-3xl text-[#1F1B44]">Services</h1>
          <p className="mt-1 text-sm text-[#6B6673]">{total} total services</p>
        </div>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 rounded-lg bg-[#13382C] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1E4839]"
        >
          <span className="text-lg leading-none">+</span> Add Service
        </button>
      </div>

      {/* Page-level error (fetch/delete) */}
      {error && !modalOpen && (
        <div className="mb-4 flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <span>{error}</span>
          <button
            onClick={() => load(page)}
            className="font-semibold underline"
          >
            Retry
          </button>
        </div>
      )}

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-[#EAE5DD] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-[#E4ECE6] text-[#1F1B44]">
              <tr>
                <th className="w-20 px-5 py-3.5 font-semibold">Order</th>
                <th className="px-5 py-3.5 font-semibold">Name</th>
                <th className="px-5 py-3.5 font-semibold">Description</th>
                <th className="w-32 px-5 py-3.5 font-semibold">Status</th>
                <th className="w-48 px-5 py-3.5 text-right font-semibold">
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
                    Loading services...
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-14 text-center text-[#6B6673]"
                  >
                    No services yet. Click “Add Service” to create one.
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-[#EAE5DD] transition hover:bg-[#E4ECE6]/40"
                  >
                    {/* 1. Order */}
                    <td className="px-5 py-3.5 text-[#6B6673]">
                      {item.sort_order}
                    </td>

                    {/* 2. Name */}
                    <td className="px-5 py-3.5 font-medium text-[#1F1B44]">
                      {item.name}
                    </td>

                    {/* 3. Description */}
                    <td
                      className="max-w-xs truncate px-5 py-3.5 text-[#6B6673]"
                      title={item.description}
                    >
                      {item.description || "—"}
                    </td>

                    {/* 4. Status */}
                    <td className="px-5 py-3.5">
                      <button
                        onClick={() => toggleActive(item)}
                        title="Click to toggle"
                        className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                          item.is_active
                            ? "bg-[#D2E3D8] text-[#13382C] hover:bg-[#c2d8c9]"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                        }`}
                      >
                        {item.is_active ? "Active" : "Inactive"}
                      </button>
                    </td>

                    {/* 5. Actions */}
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-2 whitespace-nowrap">
                        <button
                          onClick={() => openEdit(item)}
                          className="rounded-md border border-[#13382C]/30 px-3 py-1 text-xs font-semibold text-[#13382C] transition hover:bg-[#13382C] hover:text-white"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            setDeleteTarget({ id: item.id, name: item.name })
                          }
                          className="rounded-md border border-red-200 px-3 py-1 text-xs font-semibold text-red-600 transition hover:bg-red-600 hover:text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {/* <div className="mt-4 flex items-center justify-end gap-3 text-sm">
        <button
          disabled={page <= 1 || loading}
          onClick={() => load(page - 1)}
          className="rounded-lg border border-[#EAE5DD] bg-white px-4 py-2 text-[#1F1B44] transition hover:bg-[#E4ECE6] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Prev
        </button>
        <span className="text-[#6B6673]">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page >= totalPages || loading}
          onClick={() => load(page + 1)}
          className="rounded-lg border border-[#EAE5DD] bg-white px-4 py-2 text-[#1F1B44] transition hover:bg-[#E4ECE6] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div> */}
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
            onClick={() => load(page - 1)}
            className="rounded-lg border border-[#EAE5DD] bg-white px-4 py-2 text-[#1F1B44] transition hover:bg-[#E4ECE6] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Prev
          </button>
          <span className="text-[#6B6673]">
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page >= totalPages || loading}
            onClick={() => load(page + 1)}
            className="rounded-lg border border-[#EAE5DD] bg-white px-4 py-2 text-[#1F1B44] transition hover:bg-[#E4ECE6] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      {/* Add / Edit modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onMouseDown={(e) => e.target === e.currentTarget && closeModal()}
        >
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
          >
            <h2 className="mb-5 font-serif text-2xl text-[#1F1B44]">
              {editingId ? "Edit Service" : "Add Service"}
            </h2>

            {(formError || error) && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {formError || error}
              </div>
            )}

            <label className="mb-1.5 block text-sm font-medium text-[#1F1B44]">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              autoFocus
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Chakra Healing"
              className={`${inputCls} mb-4`}
            />

            <label className="mb-1.5 block text-sm font-medium text-[#1F1B44]">
              Description
            </label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              placeholder="Short description of the service"
              className={`${inputCls} mb-4 resize-none`}
            />

            <label className="mb-1.5 block text-sm font-medium text-[#1F1B44]">
              Sort order
            </label>
            <input
              type="number"
              min={1}
              value={form.sort_order}
              onChange={(e) => setForm({ ...form, sort_order: e.target.value })}
              className={`${inputCls} mb-4`}
            />

            {editingId && (
              <label className="mb-2 flex cursor-pointer items-center gap-2 text-sm text-[#1F1B44]">
                <input
                  type="checkbox"
                  checked={form.is_active}
                  onChange={(e) =>
                    setForm({ ...form, is_active: e.target.checked })
                  }
                  className="h-4 w-4 accent-[#13382C]"
                />
                Active 
              </label>
            )}

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeModal}
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
                {saving ? "Saving..." : editingId ? "Update" : "Create"}
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
              Delete service?
            </h3>
            <p className="mb-6 text-sm text-[#6B6673]">
              <span className="font-semibold text-[#1F1B44]">
                “{deleteTarget.name}”
              </span>{" "}
              permanently delete ho jayegi. Ye action undo nahi hoga.
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
