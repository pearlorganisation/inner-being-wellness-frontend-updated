"use client";

import { useEffect } from "react";

/**
 * Admin page khula ho to public site ka header / nav / footer chhupa deta hai.
 * [data-admin-shell] ke andar ke elements ko kabhi nahi chhuta.
 *
 * Do rules hain, dono same kaam karte hain:
 *  - :has() wala rule server-render ke saath hi lag jata hai, to public navbar ka flash nahi aata.
 *  - class wala rule purane browsers ke liye fallback hai.
 */
export default function HideSiteChrome() {
  useEffect(() => {
    document.body.classList.add("ib-admin-mode");
    return () => document.body.classList.remove("ib-admin-mode");
  }, []);

  return (
    <>
      <style>{`
        body:has([data-admin-shell]){padding-top:0!important;margin-top:0!important}
        body:has([data-admin-shell]) :is(header,nav,footer):not([data-admin-shell] *){display:none!important}
      `}</style>
      <style>{`
        body.ib-admin-mode{padding-top:0!important;margin-top:0!important}
        body.ib-admin-mode :is(header,nav,footer):not([data-admin-shell] *){display:none!important}
      `}</style>
    </>
  );
}