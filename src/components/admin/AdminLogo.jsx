"use client";

import { useState } from "react";
import Image from "next/image";

// 👇 Logo ka path sirf yahan badalna hai (public/ folder ke andar ka path)
export const ADMIN_LOGO_SRC = "/assets/aistudio/sinner_being_logo.png";

/**
 * size: number (px) ya koi bhi CSS value, jaise "clamp(40px, 5vw, 64px)"
 * priority: true = page load pe turant load (sidebar/login ke liye)
 *
 * Image aane tak "IB" monogram dikhta hai; image fail ho to monogram hi rehta hai.
 */
export default function AdminLogo({ size = 48, priority = false, className = "" }) {
  const [state, setState] = useState("loading"); // loading | ready | error
  const dim = typeof size === "number" ? `${size}px` : size;

  return (
    <div className={`ibl ${className}`} style={{ "--ibl": dim }} data-state={state}>
      <style>{CSS}</style>
      <strong className="ibl-fb" aria-hidden="true">IB</strong>
      {state !== "error" && (
        <Image
          src={ADMIN_LOGO_SRC}
          alt=""
          fill
          sizes="(max-width: 640px) 48px, 72px"
          priority={priority}
          className="ibl-img"
          onLoad={() => setState("ready")}
          onError={() => setState("error")}
        />
      )}
    </div>
  );
}

const CSS = `
.ibl{position:relative;flex:none;width:var(--ibl);height:var(--ibl);border-radius:50%;background:#fff;display:grid;place-items:center;
box-shadow:0 10px 24px -12px rgba(0,0,0,.55);animation:ibl-pop .75s cubic-bezier(.2,.7,.2,1) backwards;transition:transform .4s cubic-bezier(.2,.7,.2,1)}
.ibl:hover{transform:scale(1.07) rotate(-4deg)}
.ibl::before{content:"";position:absolute;inset:-4px;border-radius:50%;pointer-events:none;opacity:.95;
background:conic-gradient(from 0deg,#E3A33B,rgba(227,163,59,0) 35%,#E3A33B 70%,rgba(227,163,59,0));
-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 2px),#000 calc(100% - 2px));
mask:radial-gradient(farthest-side,transparent calc(100% - 2px),#000 calc(100% - 2px));
animation:ibl-spin 9s linear infinite}
.ibl-fb{font-family:system-ui,sans-serif;font-size:calc(var(--ibl) * .34);font-weight:800;color:#241B4B;transition:opacity .3s}
.ibl[data-state="ready"] .ibl-fb{opacity:0}
.ibl-img{box-sizing:border-box;padding:calc(var(--ibl) * .08);border-radius:50%;object-fit:contain;opacity:0;transition:opacity .45s}
.ibl[data-state="ready"] .ibl-img{opacity:1}
@keyframes ibl-pop{from{opacity:0;transform:scale(.78) rotate(-10deg)}to{opacity:1;transform:none}}
@keyframes ibl-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.ibl,.ibl::before{animation:none!important}.ibl:hover{transform:none}}
`;