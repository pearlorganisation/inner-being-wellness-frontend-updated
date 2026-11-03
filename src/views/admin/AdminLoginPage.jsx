// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { clearAuthError, hydrateAuth, loginAdmin } from "@/store/adminAuthSlice";

// // Change this if your dashboard route is different
// const DASHBOARD_ROUTE = "/admin/dashboard";

// export default function AdminLoginPage() {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { token, loading, error, hydrated } = useSelector((s) => s.adminAuth);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);

//   // Restore session; if already signed in, go straight to the dashboard
//   useEffect(() => {
//     if (!hydrated) dispatch(hydrateAuth());
//   }, [hydrated, dispatch]);

//   useEffect(() => {
//     if (hydrated && token) router.replace(DASHBOARD_ROUTE);
//   }, [hydrated, token, router]);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginAdmin({ email: email.trim(), password }))
//       .unwrap()
//       .then(() => router.push(DASHBOARD_ROUTE))
//       .catch(() => {});
//   };

//   return (
//     <div className="ibwl">
//       <style>{CSS}</style>

//       <aside className="ibwl-hero" aria-hidden="true">
//         <div className="ibwl-brand"><span>IB</span>Inner Being Wellness</div>
//         <div>
//           <h2>Calm operations,<br />for a calmer practice.</h2>
//           <p>Manage appointments, clients and practitioners from one place.</p>
//         </div>
//         <small>© {new Date().getFullYear()} Inner Being Wellness</small>
//       </aside>

//       <main className="ibwl-panel">
//         <form className="ibwl-form" onSubmit={onSubmit}>
//           <div className="ibwl-mobile-brand"><span>IB</span>Inner Being Wellness</div>
//           <h1>Welcome back</h1>
//           <p className="ibwl-sub">Sign in to open the admin dashboard.</p>

//           <label>
//             Email
//             <input type="email" inputMode="email" autoComplete="username" placeholder="admin@innerbeingwellness.com" required value={email} onChange={(e) => { setEmail(e.target.value); if (error) dispatch(clearAuthError()); }} />
//           </label>

//           <label>
//             Password
//             <div className="ibwl-pw">
//               <input type={show ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" required value={password} onChange={(e) => { setPassword(e.target.value); if (error) dispatch(clearAuthError()); }} />
//               <button type="button" onClick={() => setShow((s) => !s)} aria-label={show ? "Hide password" : "Show password"}>{show ? "Hide" : "Show"}</button>
//             </div>
//           </label>

//           <div className="ibwl-row">
//             <label className="ibwl-check"><input type="checkbox" defaultChecked /> Keep me signed in</label>
//             <a href="#" onClick={(e) => e.preventDefault()}>Forgot password?</a>
//           </div>

//           {error && <div className="ibwl-error" role="alert">{error}</div>}

//           <button className="ibwl-submit" type="submit" disabled={loading}>
//             {loading ? <><i className="ibwl-spin" /> Signing in</> : "Sign in"}
//           </button>
//         </form>
//       </main>
//     </div>
//   );
// }

// const CSS = `
// .ibwl{--ink:#0F2A27;--moss:#2F6F62;--amber:#E0A43A;--bg:#fff;--text:#14201E;--muted:#6B7C78;--line:#DCE5E2;
// min-height:100vh;display:grid;grid-template-columns:1.05fr 1fr;background:var(--bg);color:var(--text);font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;font-size:14px}
// @media (prefers-color-scheme:dark){.ibwl{--bg:#0B1514;--text:#E6EFED;--muted:#8DA19C;--line:#243936;--moss:#5FB5A2}}
// .ibwl *{box-sizing:border-box}
// .ibwl-hero{background:var(--ink);color:#CFE0DB;padding:40px 48px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden}
// .ibwl-hero::after{content:"";position:absolute;right:-120px;bottom:-120px;width:380px;height:380px;border-radius:50%;border:56px solid rgba(255,255,255,.05)}
// .ibwl-brand,.ibwl-mobile-brand{display:flex;align-items:center;gap:10px;font-weight:700;color:#fff}
// .ibwl-brand span,.ibwl-mobile-brand span{width:36px;height:36px;border-radius:10px;background:var(--amber);color:var(--ink);display:grid;place-items:center;font-weight:800}
// .ibwl-hero h2{margin:0 0 12px;font-size:clamp(28px,3.2vw,40px);line-height:1.15;letter-spacing:-.02em;color:#fff}
// .ibwl-hero p{margin:0;max-width:38ch;color:#9DBDB5}
// .ibwl-panel{display:grid;place-items:center;padding:24px}
// .ibwl-form{width:100%;max-width:400px;display:flex;flex-direction:column;gap:16px}
// .ibwl-form h1{margin:0;font-size:28px;letter-spacing:-.02em}
// .ibwl-sub{margin:-8px 0 8px;color:var(--muted)}
// .ibwl-mobile-brand{display:none;color:var(--text);margin-bottom:12px}
// .ibwl-form label{display:flex;flex-direction:column;gap:6px;font-weight:600}
// .ibwl-form input[type=text],.ibwl-form input[type=email],.ibwl-form input[type=password]{width:100%;height:44px;padding:0 14px;border-radius:10px;border:1px solid var(--line);background:transparent;color:var(--text);font:inherit;font-weight:400;outline:0;transition:border-color .15s,box-shadow .15s}
// .ibwl-form input:focus{border-color:var(--moss);box-shadow:0 0 0 3px color-mix(in srgb,var(--moss) 22%,transparent)}
// .ibwl-pw{position:relative}.ibwl-pw input{padding-right:64px!important}
// .ibwl-pw button{position:absolute;right:6px;top:6px;height:32px;padding:0 10px;border:0;background:none;color:var(--moss);font:inherit;font-weight:600;cursor:pointer;border-radius:8px}
// .ibwl-row{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap}
// .ibwl-check{flex-direction:row!important;align-items:center;gap:8px!important;font-weight:400!important;color:var(--muted)}
// .ibwl-row a{color:var(--moss);font-weight:600;text-decoration:none}
// .ibwl-submit{height:46px;border:0;border-radius:10px;background:var(--ink);color:#fff;font:inherit;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;transition:transform .1s,opacity .15s}
// .ibwl-submit:hover{opacity:.92}.ibwl-submit:active{transform:scale(.99)}.ibwl-submit:disabled{opacity:.7;cursor:wait}
// @media (prefers-color-scheme:dark){.ibwl-submit{background:var(--moss);color:#06201B}}
// .ibwl-error{padding:10px 12px;border-radius:10px;background:#F8E0DE;color:#9C332D;font-size:13px}
// .ibwl-spin{width:16px;height:16px;border-radius:50%;border:2px solid currentColor;border-right-color:transparent;animation:ibwl-r .7s linear infinite}
// @keyframes ibwl-r{to{transform:rotate(360deg)}}
// .ibwl :focus-visible{outline:2px solid var(--amber);outline-offset:2px}
// @media (max-width:860px){.ibwl{grid-template-columns:1fr}.ibwl-hero{display:none}.ibwl-mobile-brand{display:flex}.ibwl-panel{align-items:start;padding-top:8vh}}
// @media (prefers-reduced-motion:reduce){.ibwl-spin{animation-duration:2s}}
// `;








"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import AdminLogo from "@/components/admin/AdminLogo";
import { clearAuthError, hydrateAuth, loginAdmin } from "@/store/adminAuthSlice";

const DASHBOARD_ROUTE = "/admin/dashboard";

export default function AdminLoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { token, loading, error, hydrated } = useSelector((s) => s.adminAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  // Storage se session restore (ek baar)
  useEffect(() => {
    if (!hydrated) dispatch(hydrateAuth());
  }, [hydrated, dispatch]);

  // Redirect sirf yahin: "already signed in" aur "abhi sign in hua" dono cover
  useEffect(() => {
    if (hydrated && token) router.replace(DASHBOARD_ROUTE);
  }, [hydrated, token, router]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    dispatch(loginAdmin({ email: email.trim(), password }));
  };

  const clearError = () => {
    if (error) dispatch(clearAuthError());
  };

  // Session restore / redirect ke dauran form ka flash nahi
  if (!hydrated || token) {
    return (
      <div className="ibwl-boot">
        <style>{CSS}</style>
        <AdminLogo size={64} priority />
      </div>
    );
  }

  return (
    <div className="ibwl">
      <style>{CSS}</style>

      <aside className="ibwl-hero" aria-hidden="true">
        <div className="ibwl-brand">
          <AdminLogo size={56} priority />
          <span>Inner Being Wellness</span>
        </div>
        <div className="ibwl-hero-copy">
          <h2>Calm operations,<br />for a calmer practice.</h2>
          <p>Manage appointments, clients and practitioners from one place.</p>
        </div>
        <small>© {new Date().getFullYear()} Inner Being Wellness</small>
      </aside>

      <main className="ibwl-panel">
        <form className="ibwl-form" onSubmit={onSubmit}>
          <div className="ibwl-mobile-brand">
            <AdminLogo size={48} priority />
            <span>Inner Being Wellness</span>
          </div>
          <h1>Welcome back</h1>
          <p className="ibwl-sub">Sign in to open the admin dashboard.</p>

          <label>
            Email
            <input
              type="email"
              inputMode="email"
              autoComplete="username"
              placeholder="you@innerbeingwellness.com"
              required
              value={email}
              onChange={(e) => { setEmail(e.target.value); clearError(); }}
            />
          </label>

          <label>
            Password
            <div className="ibwl-pw">
              <input
                type={show ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => { setPassword(e.target.value); clearError(); }}
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                aria-label={show ? "Hide password" : "Show password"}
              >
                {show ? "Hide" : "Show"}
              </button>
            </div>
          </label>

          {error && <div className="ibwl-error" role="alert">{error}</div>}

          <button className="ibwl-submit" type="submit" disabled={loading}>
            {loading ? <><i className="ibwl-spin" /> Signing in…</> : "Sign in"}
          </button>

          {loading && (
            <p className="ibwl-hint">The server may take up to a minute to wake up on the first request.</p>
          )}
        </form>
      </main>
    </div>
  );
}

const CSS = `
.ibwl,.ibwl-boot{--ink:#241B4B;--moss:#4A3A9A;--amber:#E3A33B;--bg:#FAF8F3;--text:#2A2440;--muted:#7B7590;--line:#E4DDCF;--serif:var(--font-cormorant,"Cormorant Garamond"),Georgia,serif;--ease:cubic-bezier(.2,.7,.2,1)}
.ibwl,.ibwl-boot,.ibwl *{box-sizing:border-box}
.ibwl-boot{min-height:100vh;display:grid;place-items:center;background:var(--bg)}
.ibwl{min-height:100vh;display:grid;grid-template-columns:1.05fr 1fr;background:var(--bg);color:var(--text);font-size:14px}
.ibwl-hero{padding:clamp(28px,4vw,48px);display:flex;flex-direction:column;justify-content:space-between;gap:32px;position:relative;overflow:hidden;color:#CFC8EA;background:radial-gradient(420px 320px at 10% 0,rgba(227,163,59,.16),transparent 70%),linear-gradient(175deg,#2B2158,#1A1240)}
.ibwl-hero::after{content:"";position:absolute;right:-120px;bottom:-120px;width:380px;height:380px;border-radius:50%;border:56px solid rgba(255,255,255,.05);animation:ibwl-float 12s ease-in-out infinite}
.ibwl-brand,.ibwl-mobile-brand{display:flex;align-items:center;gap:14px;font-family:var(--serif);font-size:22px;font-weight:600;letter-spacing:.04em;color:#fff}
.ibwl-brand span{animation:ibwl-in .8s .3s var(--ease) backwards}
.ibwl-hero-copy{animation:ibwl-in .9s .15s var(--ease) backwards}
.ibwl-hero h2{margin:0 0 12px;font-family:var(--serif);font-weight:500;font-size:clamp(32px,3.6vw,46px);line-height:1.1;color:#fff}
.ibwl-hero p{margin:0;max-width:38ch;color:#A99FD6}
.ibwl-panel{display:grid;place-items:center;padding:24px}
.ibwl-form{width:100%;max-width:400px;display:flex;flex-direction:column;gap:16px;animation:ibwl-in .7s .1s var(--ease) backwards}
.ibwl-form h1{margin:0;font-family:var(--serif);font-weight:500;font-size:36px;color:var(--ink)}
.ibwl-sub{margin:-8px 0 8px;color:var(--muted)}
.ibwl-mobile-brand{display:none;color:var(--ink);margin-bottom:12px}
.ibwl-form label{display:flex;flex-direction:column;gap:6px;font-weight:600;color:var(--ink)}
.ibwl-form input{width:100%;height:46px;padding:0 14px;border-radius:12px;border:1px solid var(--line);background:#fff;color:var(--text);font:inherit;font-weight:400;outline:0;transition:border-color .15s,box-shadow .15s}
.ibwl-form input:focus{border-color:var(--moss);box-shadow:0 0 0 4px rgba(74,58,154,.12)}
.ibwl-pw{position:relative}.ibwl-pw input{padding-right:64px}
.ibwl-pw button{position:absolute;right:6px;top:7px;height:32px;padding:0 10px;border:0;background:none;color:var(--moss);font:inherit;font-weight:600;cursor:pointer;border-radius:8px}
.ibwl-pw button:hover{background:#EEE9F8}
.ibwl-submit{height:48px;border:0;border-radius:12px;background:var(--ink);color:#fff;font:inherit;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;transition:transform .15s,background .15s}
.ibwl-submit:hover{background:#2c2760}.ibwl-submit:active{transform:scale(.99)}.ibwl-submit:disabled{opacity:.75;cursor:wait}
.ibwl-error{padding:10px 12px;border-radius:12px;background:#F8E0DE;color:#9C332D;font-size:13px}
.ibwl-hint{margin:-4px 0 0;font-size:12.5px;color:var(--muted)}
.ibwl-spin{display:inline-block;width:18px;height:18px;border-radius:50%;border:2px solid currentColor;border-right-color:transparent;animation:ibwl-r .7s linear infinite}
@keyframes ibwl-r{to{transform:rotate(360deg)}}
@keyframes ibwl-in{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes ibwl-float{0%,100%{transform:translate(0,0)}50%{transform:translate(-16px,-12px)}}
.ibwl :focus-visible{outline:2px solid var(--amber);outline-offset:2px}
@media (max-width:860px){.ibwl{grid-template-columns:1fr}.ibwl-hero{display:none}.ibwl-mobile-brand{display:flex}.ibwl-panel{align-items:start;padding-top:8vh}}
@media (prefers-reduced-motion:reduce){.ibwl *,.ibwl *::before,.ibwl *::after{animation-duration:.01ms!important;animation-iteration-count:1!important}}
`;