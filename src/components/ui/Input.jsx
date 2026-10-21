/**
 * Reusable Input, Select, and Textarea Component
 */
export function Input({
  label,
  id,
  error,
  helperText,
  className = "",
  required = false,
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-medium uppercase tracking-wider text-[#2D3F35] mb-1.5"
        >
          {label} {required && <span className="text-[#C53030]">*</span>}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-[#1A2C24] placeholder:text-[#8E9B93] transition-colors focus:outline-none focus:ring-1 focus:ring-[#234B3D] focus:border-[#234B3D] ${
          error ? "border-red-400 bg-red-50/20" : "border-[#D8CFBF]"
        } ${className}`}
        required={required}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-xs text-[#7A8880]">{helperText}</p>
      )}
    </div>
  );
}

export function Textarea({
  label,
  id,
  error,
  helperText,
  rows = 5,
  className = "",
  required = false,
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-medium uppercase tracking-wider text-[#2D3F35] mb-1.5"
        >
          {label} {required && <span className="text-[#C53030]">*</span>}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-[#1A2C24] placeholder:text-[#8E9B93] transition-colors focus:outline-none focus:ring-1 focus:ring-[#234B3D] focus:border-[#234B3D] ${
          error ? "border-red-400 bg-red-50/20" : "border-[#D8CFBF]"
        } ${className}`}
        required={required}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      {helperText && !error && (
        <p className="mt-1 text-xs text-[#7A8880]">{helperText}</p>
      )}
    </div>
  );
}

export function Select({
  label,
  id,
  options = [],
  error,
  className = "",
  required = false,
  placeholder = "Select an option",
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-medium uppercase tracking-wider text-[#2D3F35] mb-1.5"
        >
          {label} {required && <span className="text-[#C53030]">*</span>}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          className={`w-full appearance-none px-4 py-2.5 bg-white border rounded-lg text-sm text-[#1A2C24] transition-colors focus:outline-none focus:ring-1 focus:ring-[#234B3D] focus:border-[#234B3D] pr-10 cursor-pointer ${
            error ? "border-red-400 bg-red-50/20" : "border-[#D8CFBF]"
          } ${className}`}
          required={required}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#234B3D]">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
