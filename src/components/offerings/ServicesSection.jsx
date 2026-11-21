// "use client";

// import { useEffect, useState } from "react";

// const API_BASE =
//   process.env.NEXT_PUBLIC_API_URL ||
//   "https://inner-wellness-backend.onrender.com/api/v1";

// // ⚠️ true = abhi local testing (admin panel me logged-in hona chahiye).
// // Backend se public endpoint (bina token) milte hi false kar dena.
// const USE_ADMIN_ENDPOINT_FOR_TESTING = true;

// const PUBLIC_ENDPOINT = "/services";
// const ADMIN_ENDPOINT = "/admin/services";
// const ADMIN_AUTH_KEY = "ibw_admin_auth";
// const PAGE_SIZE = 10;

// function getAdminToken() {
//   try {
//     const saved = JSON.parse(localStorage.getItem(ADMIN_AUTH_KEY) || "null");
//     return saved?.token || null;
//   } catch {
//     return null;
//   }
// }

// async function fetchAllServices() {
//   const endpoint = USE_ADMIN_ENDPOINT_FOR_TESTING ? ADMIN_ENDPOINT : PUBLIC_ENDPOINT;
//   const headers = { Accept: "application/json" };

//   if (USE_ADMIN_ENDPOINT_FOR_TESTING) {
//     const token = getAdminToken();
//     if (token) headers.Authorization = `Bearer ${token}`;
//   }

//   let page = 1;
//   let totalPages = 1;
//   let all = [];

//   do {
//     const res = await fetch(`${API_BASE}${endpoint}?page=${page}&limit=${PAGE_SIZE}`, {
//       headers,
//     });
//     if (!res.ok) throw new Error(`Request failed (${res.status})`);

//     const data = await res.json();
//     const rows = Array.isArray(data) ? data : data?.results || [];
//     all = all.concat(rows);
//     totalPages = Array.isArray(data) ? 1 : data?.total_pages || 1;
//     page += 1;
//   } while (page <= totalPages);

//   return all
//     .filter((s) => s.is_active !== false)
//     .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
// }

// export default function ServicesSection({
//   eyebrow = "Our Services",
//   title = "Healing & Coaching Experiences",
//   subtitle = "Choose the path that calls you back to your being.",
//   dividerSrc,
// }) {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const load = async () => {
//     setLoading(true);
//     setError("");
//     try {
//       setServices(await fetchAllServices());
//     } catch (e) {
//       console.error("Services load failed:", e);
//       setError("Services abhi load nahi ho paayi. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     load();
//   }, []);

//   return (
//     <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:pb-20">
//       <div className="mx-auto max-w-5xl">
//         {/* Heading */}
//         <div className="text-center">
//           {dividerSrc && (
//             <img
//               src={dividerSrc}
//               alt=""
//               aria-hidden="true"
//               className="mx-auto h-auto w-32 select-none sm:w-36"
//             />
//           )}
//           <p className="mt-3 text-[0.7rem] font-medium tracking-[0.18em] text-[#C5A265] sm:text-xs lg:text-sm">
//             {eyebrow.toUpperCase()}
//           </p>
//           <h2 className="mt-3 text-balance font-serif text-[clamp(1.9rem,4.4vw,3.1rem)] leading-tight text-[#2D1C59]">
//             {title}
//           </h2>
//           {subtitle && (
//             <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#4A5560] sm:text-base">
//               {subtitle}
//             </p>
//           )}
//         </div>

//         {/* Loading */}
//         {loading && (
//           <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//             {Array.from({ length: 6 }).map((_, i) => (
//               <div key={i} className="h-40 animate-pulse rounded-2xl bg-[#E9EEE3]/70" />
//             ))}
//           </div>
//         )}

//         {/* Error */}
//         {!loading && error && (
//           <div className="mt-10 rounded-2xl bg-[#E9EEE3] px-6 py-8 text-center text-sm text-[#4A5560]">
//             <p>{error}</p>
//             <button
//               onClick={load}
//               className="mt-3 font-semibold text-[#2D1C59] underline underline-offset-4"
//             >
//               Retry
//             </button>
//           </div>
//         )}

//         {/* Empty */}
//         {!loading && !error && services.length === 0 && (
//           <p className="mt-10 text-center text-[#4A5560]">Services jald hi available hongi.</p>
//         )}

//         {/* Cards */}
//         {!loading && !error && services.length > 0 && (
//           <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
//             {services.map((s, i) => (
//               <article
//                 key={s.id}
//                 className="group flex flex-col rounded-3xl bg-white p-7 shadow-[0_8px_24px_rgba(45,28,89,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(45,28,89,0.14)]"
//               >
//                 <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9EEE3] font-serif text-base text-[#2D1C59]">
//                   {String(i + 1).padStart(2, "0")}
//                 </span>
//                 <h3 className="mt-5 font-serif text-[1.55rem] leading-tight text-[#2D1C59]">
//                   {s.name}
//                 </h3>
//                 {s.description && (
//                   <p className="mt-3 text-sm leading-relaxed text-[#4A5560]">{s.description}</p>
//                 )}
//                 <span className="mt-auto block pt-6">
//                   <span className="block h-0.5 w-10 bg-[#C5A265] transition-all duration-300 group-hover:w-16" />
//                 </span>
//               </article>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/api";

export default function ServicesSection({
  eyebrow = "Our Services",
  title = "Healing & Coaching Experiences",
  subtitle = "Choose the path that calls you back to your being.",
  dividerSrc,
  limit, // e.g. 6 (home page pe)
  viewAllHref, // e.g. "/freedom-from-resistance"
  viewAllLabel = "View all services",
}) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);

  const load = async () => {
    // user login nahi hai to API call hi mat karo
    const token = localStorage.getItem("token");
    if (!token) {
      setLoggedIn(false);
      setLoading(false);
      return;
    }

    setLoggedIn(true);
    setLoading(true);
    setError("");
    try {
      let page = 1;
      let totalPages = 1;
      let all = [];

      do {
        const { data } = await api.get("/customer/services", {
          params: { page, limit: 10 },
        });
        all = all.concat(data.results || []);
        totalPages = data.total_pages || 1;
        page += 1;
      } while (page <= totalPages);

      setServices(
        all
          .filter((s) => s.is_active)
          .sort((a, b) => a.sort_order - b.sort_order),
      );
    } catch (e) {
      console.warn("Services load failed:", e);
      setError("Unable to load services. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const visible = limit ? services.slice(0, limit) : services;

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          {dividerSrc && (
            <img
              src={dividerSrc}
              alt=""
              aria-hidden="true"
              className="mx-auto h-auto w-32 select-none sm:w-36"
            />
          )}
          <p className="mt-3 text-[0.7rem] font-medium tracking-[0.18em] text-[#C5A265] sm:text-xs lg:text-sm">
            {eyebrow.toUpperCase()}
          </p>
          <h2 className="mt-3 text-balance font-serif text-[clamp(1.9rem,4.4vw,3.1rem)] leading-tight text-[#2D1C59]">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#4A5560] sm:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {/* Login nahi hai */}
        {!loading && !loggedIn && (
          <div className="mt-10 rounded-2xl bg-[#E9EEE3] px-6 py-8 text-center">
            <p className="text-sm text-[#4A5560]">
              Please login to view all the services.
            </p>
            <Link
              href="/login"
              className="mt-4 inline-block rounded-full bg-[#2D1C59] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3B2F66]"
            >
              Login
            </Link>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: limit || 6 }).map((_, i) => (
              <div
                key={i}
                className="h-40 animate-pulse rounded-2xl bg-[#E9EEE3]/70"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && loggedIn && error && (
          <div className="mt-10 rounded-2xl bg-[#E9EEE3] px-6 py-8 text-center text-sm text-[#4A5560]">
            <p>{error}</p>
            <button
              onClick={load}
              className="mt-3 font-semibold text-[#2D1C59] underline underline-offset-4"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty */}
        {!loading && loggedIn && !error && services.length === 0 && (
          <p className="mt-10 text-center text-[#4A5560]">
            No services available at the moment.
          </p>
        )}

        {/* Cards */}
        {!loading && loggedIn && !error && visible.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {visible.map((s, i) => (
              <article
                key={s.id}
                className="group flex flex-col rounded-3xl bg-white p-7 shadow-[0_8px_24px_rgba(45,28,89,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(45,28,89,0.14)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9EEE3] font-serif text-base text-[#2D1C59]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-serif text-[1.55rem] leading-tight text-[#2D1C59]">
                  {s.name}
                </h3>
                {s.description && (
                  <p className="mt-3 text-sm leading-relaxed text-[#4A5560]">
                    {s.description}
                  </p>
                )}
                <span className="mt-auto block pt-6">
                  <span className="block h-0.5 w-10 bg-[#C5A265] transition-all duration-300 group-hover:w-16" />
                </span>
              </article>
            ))}
          </div>
        )}

        {/* View all */}
        {!loading &&
          loggedIn &&
          !error &&
          viewAllHref &&
          limit &&
          services.length > limit && (
            <div className="mt-10 text-center">
              <Link
                href={viewAllHref}
                className="inline-block rounded-full bg-[#2D1C59] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#3B2F66]"
              >
                {viewAllLabel}
              </Link>
            </div>
          )}
      </div>
    </section>
  );
}
