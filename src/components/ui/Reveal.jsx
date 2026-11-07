"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal wrapper.
 * <Reveal delay={100} direction="up|left|right|zoom" as="section">...</Reveal>
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  as: Tag = "div",
  className = "",
  threshold = 0.15,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  const dir =
    direction === "left" ? "reveal-left" :
    direction === "right" ? "reveal-right" :
    direction === "zoom" ? "reveal-zoom" : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${dir} ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}