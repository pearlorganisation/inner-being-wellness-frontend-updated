import Link from "next/link";

/**
 * Reusable Button Component for Inner Being Wellness
 * Styled matching the Figma design: Amber-gold pills and elegant outlines.
 *
 * Font sizes text-xs/sm/base se aate hain (globals.css tokens, client ka +2px yahin se).
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  href,
  ...props
}) {
  // Mobile pe text wrap ho sakta hai (long label overflow na kare), sm (640px) se ek line
  const baseStyles =
    "inline-flex max-w-full items-center justify-center text-center font-medium transition-all duration-300 whitespace-normal sm:whitespace-nowrap [&_svg]:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D1C59] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer motion-reduce:transition-none motion-reduce:hover:transform-none";

  // min-h: touch target mobile pe comfortable
  const sizeStyles = {
    sm: "min-h-10 px-4 py-1.5 text-xs rounded-full gap-1.5",
    md: "min-h-11 px-6 py-2.5 text-sm rounded-full gap-2 shadow-xs hover:shadow-sm",
    lg: "min-h-12 px-6 py-3 text-base rounded-full gap-2.5 shadow-sm hover:shadow sm:px-7",
  };

  const variantStyles = {
    primary:
      "bg-[#E8A948] text-[#231754] font-semibold hover:bg-[#DC9C39] active:bg-[#CE8E2C] hover:translate-y-[-1px] active:translate-y-[0px] active:scale-[0.98]",
    purple:
      "bg-[#2D1C59] text-white font-medium hover:bg-[#231754] active:bg-[#1A103F] shadow-xs hover:shadow active:scale-[0.98]",
    teal:
      "bg-[#0E6E6B] text-white font-medium hover:bg-[#0B5C5A] active:bg-[#084947] shadow-xs hover:shadow active:scale-[0.98]",
    secondary:
      "bg-[#EFEAE0] text-[#2D1C59] hover:bg-[#E5DFD3] active:bg-[#DCD5C6] border border-[#DDD5C5] active:scale-[0.98]",
    outline:
      "border border-[#2D1C59]/30 text-[#2D1C59] hover:bg-[#2D1C59]/8 active:bg-[#2D1C59]/12 bg-white/60 active:scale-[0.98]",
    ghost:
      "text-[#2D1C59] hover:bg-[#2D1C59]/8 active:bg-[#2D1C59]/12 bg-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${disabled ? "pointer-events-none opacity-50" : ""} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        onClick={onClick}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}