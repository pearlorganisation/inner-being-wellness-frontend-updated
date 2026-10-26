// src/app/janki/page.js
import Image from "next/image";
import Link from "next/link";
import { jankiData as d } from "@/data/janki";
import Button from "@/components/ui/Button";
import EmailLink from "@/components/EmailLink";

export const metadata = {
  title: d.meta.title,
  description: d.hero.intro,
};

const wrap = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const h2 =
  "font-serif text-[1.75rem] sm:text-4xl leading-tight text-[#2D1C59] break-words";

function Photo({ src, alt, className = "", priority = false, position = "object-top" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#F6F3EC] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 92vw, (max-width: 1024px) 70vw, 45vw"
        className={`object-cover ${position}`}
      />
    </div>
  );
}

function CheckList({ items, dark = false }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3 leading-relaxed">
          <span
            aria-hidden
            className={`mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full ${
              dark ? "bg-[#E0BA73]" : "bg-[#C59B27]"
            }`}
          />
          <span className="min-w-0 break-words">{t}</span>
        </li>
      ))}
    </ul>
  );
}

function CtaButton() {
  return (
    <Button
      variant="primary"
      size="md"
      href={d.hero.cta.href}
      className="w-full justify-center sm:w-auto"
    >
      {d.hero.cta.label}
    </Button>
  );
}

export default function JankiPage() {
  return (
    <main className="w-full max-w-full overflow-x-clip bg-[#FAFAF7] text-[#445064]">
      {/* HERO */}
      <section className="border-b border-[#2D1C59]/10 bg-[#F6F3EC]">
        <div
          className={`${wrap} grid grid-cols-1 items-center gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:gap-14 lg:py-20`}
        >
          <div className="order-2 min-w-0 lg:order-1">
            <p className="mb-4 text-sm font-semibold leading-snug text-[#0F6F73]">
              {d.name} <span className="mx-1 opacity-50">|</span> {d.role}
            </p>
            <h1 className="break-words font-serif text-[2rem] leading-[1.12] text-[#2D1C59] sm:text-5xl lg:text-6xl">
              {d.hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed sm:mt-6 sm:text-lg">
              {d.hero.intro}
            </p>
            <div className="mt-7 flex flex-col items-stretch gap-4 sm:mt-8 sm:flex-row sm:items-center">
              <CtaButton />
              <EmailLink
                email={d.email}
                wrapperClassName="items-center sm:items-start"
                className="text-center text-sm font-semibold text-[#2D1C59] underline underline-offset-4 hover:text-[#0F6F73] sm:text-left"
              >
                {d.hero.emailLabel}
              </EmailLink>
            </div>
          </div>
          <Photo
            src={d.images.hero}
            alt={d.images.alt.hero}
            priority
            className="order-1 aspect-[4/4.2] w-full max-w-sm justify-self-center sm:max-w-md lg:order-2 lg:max-w-none"
          />
        </div>
      </section>

      {/* WHAT + WHO */}
      <section
        className={`${wrap} grid grid-cols-1 gap-8 py-12 sm:py-16 md:grid-cols-2 md:gap-10 lg:py-24`}
      >
        <div className="min-w-0">
          <h2 className={h2}>{d.what.heading}</h2>
          <p className="mt-4 max-w-md leading-relaxed">{d.what.text}</p>
        </div>
        <div className="min-w-0">
          <h2 className={h2}>{d.who.heading}</h2>
          <p className="mt-4 max-w-md leading-relaxed">{d.who.text}</p>
        </div>
      </section>

      {/* FEEL + COST */}
      <section className="bg-[#F6F3EC] py-12 sm:py-16 lg:py-24">
        <div className={`${wrap} grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8`}>
          {[d.feel, d.cost].map((b) => (
            <article
              key={b.heading}
              className="min-w-0 rounded-2xl border border-[#2D1C59]/10 bg-white p-6 sm:p-9"
            >
              <h2 className={h2}>{b.heading}</h2>
              <div className="mt-6">
                <CheckList items={b.items} />
              </div>
              <p className="mt-7 border-t border-[#2D1C59]/10 pt-5 font-serif text-base italic leading-snug text-[#0F6F73] sm:text-lg">
                {b.underneath}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT CHANGES */}
      <section className="bg-[#241049] py-12 text-white sm:py-16 lg:py-24">
        <div className={wrap}>
          <h2 className="font-serif text-[1.75rem] sm:text-4xl">{d.change.heading}</h2>
          <ol className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
            {d.change.steps.map((s, i) => (
              <li
                key={s.title}
                className="min-w-0 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
              >
                <span className="font-serif text-3xl text-[#E0BA73]">{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 leading-relaxed text-white/75">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl leading-relaxed text-white/75 sm:mt-10">
            {d.change.note}
          </p>
        </div>
      </section>

      {/* END GOAL */}
      <section
        className={`${wrap} grid grid-cols-1 items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24`}
      >
        <Photo
          src={d.images.portrait}
          alt={d.images.alt.portrait}
          className="aspect-[4/5] w-full max-w-sm justify-self-center sm:max-w-md lg:max-w-none"
        />
        <div className="min-w-0">
          <h2 className={h2}>{d.goal.heading}</h2>
          <div className="mt-6">
            <CheckList items={d.goal.items} />
          </div>
          <p className="mt-8 font-serif text-xl text-[#C59B27] sm:text-2xl">
            {d.goal.tagline}
          </p>
        </div>
      </section>

      {/* THE SHIFT */}
      <section className="bg-[#F6F3EC] py-12 sm:py-16 lg:py-20">
        <div className={wrap}>
          <h2 className={h2}>{d.shift.heading}</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {d.shift.items.map((s) => (
              <p
                key={s.from}
                className="min-w-0 rounded-2xl border border-[#2D1C59]/10 bg-white p-5 text-base leading-snug sm:p-6 sm:text-lg"
              >
                {d.shift.fromLabel}{" "}
                <span className="text-[#7A8599] line-through decoration-[#C59B27]/60">
                  {s.from}
                </span>
                <br />
                {d.shift.toLabel}{" "}
                <span className="font-serif text-xl text-[#2D1C59] sm:text-2xl">
                  {s.to}
                </span>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* WAYS TO WORK */}
      <section
        className={`${wrap} grid grid-cols-1 items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24`}
      >
        <div className="order-2 min-w-0 lg:order-1">
          <h2 className={h2}>{d.ways.heading}</h2>
          <ul className="mt-8 divide-y divide-[#2D1C59]/10 border-y border-[#2D1C59]/10">
            {d.ways.items.map((w) => (
              <li key={w} className="py-4 text-base leading-snug sm:py-5 sm:text-lg">
                {w}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaButton />
          </div>
        </div>
        <Photo
          src={d.images.work}
          alt={d.images.alt.work}
          className="order-1 aspect-[4/5] w-full max-w-sm justify-self-center sm:max-w-md lg:order-2 lg:max-w-none"
        />
      </section>

      {/* ABOUT JANKI */}
      <section className="bg-[#F6F3EC] py-12 sm:py-16 lg:py-24">
        <div
          className={`${wrap} grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16`}
        >
          <Photo
            src={d.images.about}
            alt={d.images.alt.about}
            className="aspect-square w-full max-w-sm justify-self-center sm:max-w-md lg:max-w-none"
            position="object-center"
          />
          <div className="min-w-0">
            <h2 className={h2}>{d.about.heading}</h2>
            <div className="mt-6 text-base sm:text-lg">
              <CheckList items={d.about.items} />
            </div>

            {/* All enquiries go through the common Inner Being email / booking */}
            <div className="mt-8 rounded-2xl border border-[#2D1C59]/10 bg-white p-5 sm:mt-10 sm:p-6">
              <p className="font-serif text-xl text-[#2D1C59]">{d.name}</p>
              <p className="mt-1 text-[#7A8599]">{d.role}</p>
              <p className="mt-4 text-sm leading-relaxed">{d.about.contactNote}</p>
              <div className="mt-4 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
                <CtaButton />
                <EmailLink
                  email={d.email}
                  wrapperClassName="items-center sm:items-start"
                  className="break-all text-center text-sm text-[#0F6F73] underline underline-offset-4 sm:text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALSO AT INNER BEING WELLNESS */}
      <section className={`${wrap} py-10 sm:py-14 lg:py-20`}>
        <div className="flex flex-col gap-6 rounded-2xl border border-[#2D1C59]/10 bg-white p-6 sm:p-9 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 max-w-2xl">
            <h2 className="font-serif text-xl text-[#2D1C59] sm:text-2xl">
              {d.alsoAt.heading}
            </h2>
            <p className="mt-2 leading-relaxed">{d.alsoAt.text}</p>
            <p className="mt-3 text-sm text-[#7A8599]">
              <span className="font-semibold text-[#2D1C59]">{d.alsoAt.name}</span>,{" "}
              {d.alsoAt.role}
            </p>
          </div>
          <Link
            href={d.alsoAt.cta.href}
            className="shrink-0 rounded-full border border-[#2D1C59] px-6 py-3 text-center text-sm font-semibold text-[#2D1C59] transition hover:bg-[#2D1C59] hover:text-white"
          >
            {d.alsoAt.cta.label}
          </Link>
        </div>
      </section>
    </main>
  );
}


// // src/app/janki/page.js
// import Image from "next/image";
// import Link from "next/link";
// import { jankiData as d } from "@/data/janki";
// import Button from "@/components/ui/Button";

// export const metadata = {
//   title: "About Janki Ravani | Inner Being Wellness",
//   description: d.hero.intro,
// };

// const wrap = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
// const h2 = "font-serif text-3xl sm:text-4xl text-[#2D1C59] leading-tight";

// function Photo({ src, alt, className = "", priority = false, position = "object-top" }) {
//   return (
//     <div className={`relative overflow-hidden rounded-2xl bg-[#F6F3EC] ${className}`}>
//       <Image
//         src={src}
//         alt={alt}
//         fill
//         priority={priority}
//         sizes="(max-width: 1024px) 100vw, 45vw"
//         className={`object-cover ${position}`}
//       />
//     </div>
//   );
// }

// function CheckList({ items, dark = false }) {
//   return (
//     <ul className="space-y-3">
//       {items.map((t) => (
//         <li key={t} className="flex gap-3 leading-relaxed">
//           <span
//             aria-hidden
//             className={`mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full ${
//               dark ? "bg-[#E0BA73]" : "bg-[#C59B27]"
//             }`}
//           />
//           <span>{t}</span>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default function JankiPage() {
//   return (
//     <main className="bg-[#FAFAF7] text-[#445064]">
//       {/* HERO */}
//       <section className="bg-[#F6F3EC] border-b border-[#2D1C59]/10">
//         <div className={`${wrap} grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20`}>
//           <div className="order-2 lg:order-1">
//             <p className="mb-4 text-sm font-semibold text-[#0F6F73]">
//               {d.name} &nbsp;|&nbsp; {d.role}
//             </p>
//             <h1 className="font-serif text-4xl leading-[1.1] text-[#2D1C59] sm:text-5xl lg:text-6xl">
//               {d.hero.title}
//             </h1>
//             <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
//               {d.hero.intro}
//             </p>
//             <div className="mt-8 flex flex-wrap items-center gap-4">
//               <Button variant="primary" size="md" href={d.hero.cta.href}>
//                 {d.hero.cta.label}
//               </Button>
//               <a
//                 href={`mailto:${d.email}`}
//                 className="text-sm font-semibold text-[#2D1C59] underline underline-offset-4 hover:text-[#0F6F73]"
//               >
//                 Email Janki
//               </a>
//             </div>
//           </div>
//           <Photo
//             src={d.images.hero}
//             alt={`${d.name}, personal coach to founders and leaders`}
//             priority
//             className="order-1 aspect-[4/4.2] w-full max-w-lg justify-self-center lg:order-2 lg:max-w-none"
//           />
//         </div>
//       </section>

//       {/* WHAT + WHO */}
//       <section className={`${wrap} grid gap-10 py-16 md:grid-cols-2 lg:py-24`}>
//         <div>
//           <h2 className={h2}>{d.what.heading}</h2>
//           <p className="mt-4 max-w-md leading-relaxed">{d.what.text}</p>
//         </div>
//         <div>
//           <h2 className={h2}>{d.who.heading}</h2>
//           <p className="mt-4 max-w-md leading-relaxed">{d.who.text}</p>
//         </div>
//       </section>

//       {/* FEEL + COST */}
//       <section className="bg-[#F6F3EC] py-16 lg:py-24">
//         <div className={`${wrap} grid gap-6 md:grid-cols-2 lg:gap-8`}>
//           {[d.feel, d.cost].map((b) => (
//             <article
//               key={b.heading}
//               className="rounded-2xl border border-[#2D1C59]/10 bg-white p-7 sm:p-9"
//             >
//               <h2 className={h2}>{b.heading}</h2>
//               <div className="mt-6">
//                 <CheckList items={b.items} />
//               </div>
//               <p className="mt-7 border-t border-[#2D1C59]/10 pt-5 font-serif text-lg italic leading-snug text-[#0F6F73]">
//                 {b.underneath}
//               </p>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* HOW IT CHANGES */}
//       <section className="bg-[#241049] py-16 text-white lg:py-24">
//         <div className={wrap}>
//           <h2 className="font-serif text-3xl sm:text-4xl">{d.change.heading}</h2>
//           <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {d.change.steps.map((s, i) => (
//               <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
//                 <span className="font-serif text-3xl text-[#E0BA73]">{i + 1}</span>
//                 <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
//                 <p className="mt-1 leading-relaxed text-white/75">{s.text}</p>
//               </li>
//             ))}
//           </ol>
//           <p className="mt-10 max-w-3xl leading-relaxed text-white/75">{d.change.note}</p>
//         </div>
//       </section>

//       {/* END GOAL */}
//       <section className={`${wrap} grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24`}>
//         <Photo
//           src={d.images.portrait}
//           alt={`${d.name} smiling in a floral blazer`}
//           className="aspect-[4/5] w-full max-w-md justify-self-center lg:max-w-none"
//         />
//         <div>
//           <h2 className={h2}>{d.goal.heading}</h2>
//           <div className="mt-6">
//             <CheckList items={d.goal.items} />
//           </div>
//           <p className="mt-8 font-serif text-2xl text-[#C59B27]">{d.goal.tagline}</p>
//         </div>
//       </section>

//       {/* THE SHIFT */}
//       <section className="bg-[#F6F3EC] py-16 lg:py-20">
//         <div className={wrap}>
//           <h2 className={h2}>{d.shift.heading}</h2>
//           <div className="mt-8 grid gap-4 md:grid-cols-3">
//             {d.shift.items.map((s) => (
//               <p
//                 key={s.from}
//                 className="rounded-2xl border border-[#2D1C59]/10 bg-white p-6 text-lg leading-snug"
//               >
//                 From{" "}
//                 <span className="text-[#7A8599] line-through decoration-[#C59B27]/60">
//                   {s.from}
//                 </span>
//                 <br />
//                 to <span className="font-serif text-2xl text-[#2D1C59]">{s.to}</span>
//               </p>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WAYS TO WORK */}
//       <section className={`${wrap} grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24`}>
//         <div className="order-2 lg:order-1">
//           <h2 className={h2}>{d.ways.heading}</h2>
//           <ul className="mt-8 divide-y divide-[#2D1C59]/10 border-y border-[#2D1C59]/10">
//             {d.ways.items.map((w) => (
//               <li key={w} className="py-5 text-lg leading-snug">
//                 {w}
//               </li>
//             ))}
//           </ul>
//           <div className="mt-8">
//             <Button variant="primary" size="md" href={d.hero.cta.href}>
//               {d.hero.cta.label}
//             </Button>
//           </div>
//         </div>
//         <Photo
//           src={d.images.work}
//           alt={`${d.name} seated, smiling`}
//           className="order-1 aspect-[4/5] w-full max-w-md justify-self-center lg:order-2 lg:max-w-none"
//         />
//       </section>

//       {/* ABOUT JANKI */}
//       <section className="bg-[#F6F3EC] py-16 lg:py-24">
//         <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16`}>
//           <Photo
//             src={d.images.about}
//             alt={`${d.name}, black and white portrait`}
//             className="aspect-square w-full max-w-md justify-self-center lg:max-w-none"
//             position="object-center"
//           />
//           <div>
//             <h2 className={h2}>{d.about.heading}</h2>
//             <div className="mt-6 text-lg">
//               <CheckList items={d.about.items} />
//             </div>
//             <div className="mt-10 rounded-2xl border border-[#2D1C59]/10 bg-white p-6">
//               <p className="font-serif text-xl text-[#2D1C59]">{d.name}</p>
//               <p className="mt-1 text-[#7A8599]">{d.role}</p>
//               <div className="mt-4 flex flex-col gap-1 text-sm sm:flex-row sm:gap-6">
//                 <a
//                   href={d.websiteUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#0F6F73] underline underline-offset-4"
//                 >
//                   {d.website}
//                 </a>
//                 <a
//                   href={`mailto:${d.email}`}
//                   className="break-all text-[#0F6F73] underline underline-offset-4"
//                 >
//                   {d.email}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ALSO AT INNER BEING WELLNESS */}
//       <section className={`${wrap} py-14 lg:py-20`}>
//         <div className="flex flex-col gap-6 rounded-2xl border border-[#2D1C59]/10 bg-white p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
//           <div className="max-w-2xl">
//             <h2 className="font-serif text-2xl text-[#2D1C59]">{d.alsoAt.heading}</h2>
//             <p className="mt-2 leading-relaxed">{d.alsoAt.text}</p>
//             <p className="mt-3 text-sm text-[#7A8599]">
//               <span className="font-semibold text-[#2D1C59]">{d.alsoAt.name}</span>,{" "}
//               {d.alsoAt.role}
//             </p>
//           </div>
//           <Link
//             href={d.alsoAt.cta.href}
//             className="shrink-0 rounded-full border border-[#2D1C59] px-6 py-3 text-center text-sm font-semibold text-[#2D1C59] transition hover:bg-[#2D1C59] hover:text-white"
//           >
//             {d.alsoAt.cta.label}
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }