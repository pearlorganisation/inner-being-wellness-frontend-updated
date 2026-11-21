"use client";

export default function Stars({ value = 0, onChange, size = "h-5 w-5" }) {
  const interactive = typeof onChange === "function";

  return (
    <div className="inline-flex items-center gap-0.5" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => {
        const star = (
          <svg
            viewBox="0 0 20 20"
            className={`${size} ${n <= value ? "fill-[#C5A265]" : "fill-gray-200"}`}
            aria-hidden="true"
          >
            <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.9l-5.25 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
          </svg>
        );

        return interactive ? (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            aria-label={`${n} star`}
            className="p-0.5 transition hover:scale-110"
          >
            {star}
          </button>
        ) : (
          <span key={n}>{star}</span>
        );
      })}
    </div>
  );
}