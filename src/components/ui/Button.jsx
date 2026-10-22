import Link from "next/link";

/**
 * Reusable Button Component for Inner Being Wellness
 * Styled matching the Figma design: Amber-gold pills and elegant outlines.
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
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D1C59] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs rounded-full gap-1.5",
    md: "px-6 py-2.5 text-sm rounded-full gap-2 shadow-xs hover:shadow-sm",
    lg: "px-7 py-3 text-base rounded-full gap-2.5 shadow-sm hover:shadow",
  };

  const variantStyles = {
    primary:
      "bg-[#E8A948] text-[#231754] font-semibold hover:bg-[#DC9C39] active:bg-[#CE8E2C] hover:translate-y-[-1px] active:translate-y-[0px]",
    purple:
      "bg-[#2D1C59] text-white font-medium hover:bg-[#231754] active:bg-[#1A103F] shadow-xs hover:shadow",
    teal:
      "bg-[#0E6E6B] text-white font-medium hover:bg-[#0B5C5A] active:bg-[#084947] shadow-xs hover:shadow",
    secondary:
      "bg-[#EFEAE0] text-[#2D1C59] hover:bg-[#E5DFD3] active:bg-[#DCD5C6] border border-[#DDD5C5]",
    outline:
      "border border-[#2D1C59]/30 text-[#2D1C59] hover:bg-[#2D1C59]/8 active:bg-[#2D1C59]/12 bg-white/60",
    ghost:
      "text-[#2D1C59] hover:bg-[#2D1C59]/8 active:bg-[#2D1C59]/12 bg-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick} {...props}>
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
