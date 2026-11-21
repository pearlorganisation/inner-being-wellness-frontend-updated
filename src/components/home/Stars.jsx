export default function Stars({ value = 0, size = "h-4 w-4" }) {
  const rounded = Math.round(Number(value) || 0);
  return (
    <div className="flex gap-0.5" aria-label={`${rounded} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          viewBox="0 0 24 24"
          className={`${size} ${n <= rounded ? "fill-[#C5A265]" : "fill-[#D9DDD3]"}`}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}