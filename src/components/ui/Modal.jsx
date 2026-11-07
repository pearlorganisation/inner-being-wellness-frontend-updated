// src/components/ui/Modal.jsx
"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, title, children, maxWidth = "max-w-3xl" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  // createPortal renders the modal directly into document.body
  // This prevents any parent CSS (like overflow-clip or transform) from breaking the fixed positioning.
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      
      {/* Dark Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-[#1A1625]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Box */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`relative flex w-full ${maxWidth} max-h-[85vh] flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/20 transition-all`}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-6 py-5 sm:px-8">
          <h3 id="modal-title" className="pr-4 font-serif text-xl font-bold text-[#2D1C59] sm:text-2xl line-clamp-1">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FBF9F5] text-[#52665B] transition-all hover:bg-[#EAE4D7] hover:text-[#2D1C59]"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}