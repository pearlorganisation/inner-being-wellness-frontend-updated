"use client";
// src/components/EmailLink.jsx
// If mailto doesn't work (no mail app set up on the computer), the email is still copied to the clipboard.
import { useEffect, useRef, useState } from "react";

export default function EmailLink({
  email,
  children,
  className = "",
  wrapperClassName = "",
}) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // If the clipboard is blocked, mailto still works.
    }
    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 3000);
  };

  return (
    <span className={`inline-flex flex-col gap-1 ${wrapperClassName}`}>
      <a href={`mailto:${email}`} onClick={handleClick} className={className}>
        {children ?? email}
      </a>
      {copied && (
        <span role="status" className="break-all text-xs text-[#0F6F73]">
          Email copied: {email}
        </span>
      )}
    </span>
  );
}