// // src/app/janki/page.js
// import Image from "next/image";
// import Link from "next/link";
// import { jankiData as d } from "@/data/janki";

// export const metadata = {
//   title: "Janki Ravani | Personal Coach to Founders & Leaders",
//   description: d.hero.intro,
// };

// const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10";

// function Photo({ src, alt, className = "", priority = false, position = "object-top" }) {
//   return (
//     <div className={`relative overflow-hidden rounded-2xl bg-[#E4ECE6] ${className}`}>
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
//             className={`mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full ${
//               dark ? "bg-[#E0BA73]" : "bg-[#1E4839]"
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
//     <main className="bg-white text-[#1F1B44]">
//       {/* HERO */}
//       <section className="bg-[#E4ECE6]">
//         <div className={`${wrap} grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20`}>
//           <div className="order-2 lg:order-1">
//             <p className="mb-4 text-sm font-medium text-[#1E4839]">
//               {d.name} &nbsp;|&nbsp; {d.role}
//             </p>
//             <h1 className="font-serif text-4xl leading-[1.1] text-[#13382C] sm:text-5xl lg:text-6xl">
//               {d.hero.title}
//             </h1>
//             <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4a4655] sm:text-lg">
//               {d.hero.intro}
//             </p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <Link
//                 href={d.hero.cta.href}
//                 className="rounded-full bg-[#13382C] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#1E4839] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B4B]"
//               >
//                 {d.hero.cta.label}
//               </Link>
//               <a
//                 href={`mailto:${d.email}`}
//                 className="rounded-full border border-[#13382C] px-7 py-3 text-sm font-medium text-[#13382C] transition hover:bg-[#D2E3D8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B4B]"
//               >
//                 Email Janki
//               </a>
//             </div>
//           </div>
//           <Photo
//             src={d.images.hero}
//             alt={`${d.name}, coach to founders and leaders`}
//             priority
//             className="order-1 aspect-[4/4.2] w-full max-w-lg justify-self-center lg:order-2 lg:max-w-none"
//           />
//         </div>
//       </section>

//       {/* WHAT + WHO */}
//       <section className={`${wrap} grid gap-10 py-16 md:grid-cols-2 lg:py-24`}>
//         <div>
//           <h2 className="font-serif text-2xl text-[#13382C] sm:text-3xl">{d.what.heading}</h2>
//           <p className="mt-4 max-w-md leading-relaxed text-[#4a4655]">{d.what.text}</p>
//         </div>
//         <div>
//           <h2 className="font-serif text-2xl text-[#13382C] sm:text-3xl">{d.who.heading}</h2>
//           <p className="mt-4 max-w-md leading-relaxed text-[#4a4655]">{d.who.text}</p>
//         </div>
//       </section>

//       {/* FEEL + COST */}
//       <section className="bg-[#F6F8F6] py-16 lg:py-24">
//         <div className={`${wrap} grid gap-6 md:grid-cols-2 lg:gap-8`}>
//           {[d.feel, d.cost].map((b) => (
//             <article key={b.heading} className="rounded-2xl border border-[#EAE5DD] bg-white p-7 sm:p-9">
//               <h2 className="font-serif text-2xl text-[#13382C] sm:text-3xl">{b.heading}</h2>
//               <div className="mt-6 text-[#3b3748]">
//                 <CheckList items={b.items} />
//               </div>
//               <p className="mt-7 border-t border-[#EAE5DD] pt-5 font-serif text-lg italic leading-snug text-[#1E4839]">
//                 {b.underneath}
//               </p>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* HOW IT CHANGES */}
//       <section className="bg-[#13382C] py-16 text-white lg:py-24">
//         <div className={wrap}>
//           <h2 className="font-serif text-3xl sm:text-4xl">{d.change.heading}</h2>
//           <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {d.change.steps.map((s, i) => (
//               <li key={s.title} className="rounded-2xl bg-[#1E4839] p-6">
//                 <span className="font-serif text-3xl text-[#E0BA73]">{i + 1}</span>
//                 <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
//                 <p className="mt-1 leading-relaxed text-[#D2E3D8]">{s.text}</p>
//               </li>
//             ))}
//           </ol>
//           <p className="mt-10 max-w-3xl leading-relaxed text-[#D2E3D8]">{d.change.note}</p>
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
//           <h2 className="font-serif text-3xl text-[#13382C] sm:text-4xl">{d.goal.heading}</h2>
//           <div className="mt-6 text-[#3b3748]">
//             <CheckList items={d.goal.items} />
//           </div>
//           <p className="mt-8 font-serif text-2xl text-[#C59B4B]">{d.goal.tagline}</p>
//         </div>
//       </section>

//       {/* THE SHIFT */}
//       <section className="bg-[#E4ECE6] py-16 lg:py-20">
//         <div className={wrap}>
//           <h2 className="font-serif text-3xl text-[#13382C] sm:text-4xl">{d.shift.heading}</h2>
//           <div className="mt-8 grid gap-4 md:grid-cols-3">
//             {d.shift.items.map((s) => (
//               <p
//                 key={s.from}
//                 className="rounded-2xl bg-white p-6 text-lg leading-snug text-[#3b3748]"
//               >
//                 From <span className="text-[#6B6673] line-through decoration-[#C59B4B]/60">{s.from}</span>
//                 <br />
//                 to <span className="font-serif text-2xl text-[#13382C]">{s.to}</span>
//               </p>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* WAYS TO WORK */}
//       <section className={`${wrap} grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24`}>
//         <div className="order-2 lg:order-1">
//           <h2 className="font-serif text-3xl text-[#13382C] sm:text-4xl">{d.ways.heading}</h2>
//           <ul className="mt-8 divide-y divide-[#EAE5DD] border-y border-[#EAE5DD]">
//             {d.ways.items.map((w) => (
//               <li key={w} className="py-5 text-lg leading-snug text-[#3b3748]">
//                 {w}
//               </li>
//             ))}
//           </ul>
//           <Link
//             href={d.hero.cta.href}
//             className="mt-8 inline-block rounded-full bg-[#13382C] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#1E4839] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B4B]"
//           >
//             {d.hero.cta.label}
//           </Link>
//         </div>
//         <Photo
//           src={d.images.work}
//           alt={`${d.name} in conversation pose`}
//           className="order-1 aspect-[4/5] w-full max-w-md justify-self-center lg:order-2 lg:max-w-none"
//         />
//       </section>

//       {/* ABOUT JANKI */}
//       <section className="bg-[#F6F8F6] py-16 lg:py-24">
//         <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16`}>
//           <Photo
//             src={d.images.about}
//             alt={`${d.name}, black and white portrait`}
//             className="aspect-square w-full max-w-md justify-self-center lg:max-w-none"
//             position="object-center"
//           />
//           <div>
//             <h2 className="font-serif text-3xl text-[#13382C] sm:text-4xl">{d.about.heading}</h2>
//             <div className="mt-6 text-lg text-[#3b3748]">
//               <CheckList items={d.about.items} />
//             </div>
//             <div className="mt-10 rounded-2xl border border-[#EAE5DD] bg-white p-6">
//               <p className="font-serif text-xl text-[#13382C]">{d.name}</p>
//               <p className="mt-1 text-[#6B6673]">{d.role}</p>
//               <div className="mt-4 flex flex-col gap-1 text-sm sm:flex-row sm:gap-6">
//                 <a href={d.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-[#1E4839] underline underline-offset-4">
//                   {d.website}
//                 </a>
//                 <a href={`mailto:${d.email}`} className="break-all text-[#1E4839] underline underline-offset-4">
//                   {d.email}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }




// new updated   







// src/app/janki/page.js
import Image from "next/image";
import Link from "next/link";
import { jankiData as d } from "@/data/janki";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "About Janki Ravani | Inner Being Wellness",
  description: d.hero.intro,
};

const wrap = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const h2 = "font-serif text-3xl sm:text-4xl text-[#2D1C59] leading-tight";

function Photo({ src, alt, className = "", priority = false, position = "object-top" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#F6F3EC] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 45vw"
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
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function JankiPage() {
  return (
    <main className="bg-[#FAFAF7] text-[#445064]">
      {/* HERO */}
      <section className="bg-[#F6F3EC] border-b border-[#2D1C59]/10">
        <div className={`${wrap} grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20`}>
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-semibold text-[#0F6F73]">
              {d.name} &nbsp;|&nbsp; {d.role}
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] text-[#2D1C59] sm:text-5xl lg:text-6xl">
              {d.hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
              {d.hero.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="md" href={d.hero.cta.href}>
                {d.hero.cta.label}
              </Button>
              <a
                href={`mailto:${d.email}`}
                className="text-sm font-semibold text-[#2D1C59] underline underline-offset-4 hover:text-[#0F6F73]"
              >
                Email Janki
              </a>
            </div>
          </div>
          <Photo
            src={d.images.hero}
            alt={`${d.name}, personal coach to founders and leaders`}
            priority
            className="order-1 aspect-[4/4.2] w-full max-w-lg justify-self-center lg:order-2 lg:max-w-none"
          />
        </div>
      </section>

      {/* WHAT + WHO */}
      <section className={`${wrap} grid gap-10 py-16 md:grid-cols-2 lg:py-24`}>
        <div>
          <h2 className={h2}>{d.what.heading}</h2>
          <p className="mt-4 max-w-md leading-relaxed">{d.what.text}</p>
        </div>
        <div>
          <h2 className={h2}>{d.who.heading}</h2>
          <p className="mt-4 max-w-md leading-relaxed">{d.who.text}</p>
        </div>
      </section>

      {/* FEEL + COST */}
      <section className="bg-[#F6F3EC] py-16 lg:py-24">
        <div className={`${wrap} grid gap-6 md:grid-cols-2 lg:gap-8`}>
          {[d.feel, d.cost].map((b) => (
            <article
              key={b.heading}
              className="rounded-2xl border border-[#2D1C59]/10 bg-white p-7 sm:p-9"
            >
              <h2 className={h2}>{b.heading}</h2>
              <div className="mt-6">
                <CheckList items={b.items} />
              </div>
              <p className="mt-7 border-t border-[#2D1C59]/10 pt-5 font-serif text-lg italic leading-snug text-[#0F6F73]">
                {b.underneath}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* HOW IT CHANGES */}
      <section className="bg-[#241049] py-16 text-white lg:py-24">
        <div className={wrap}>
          <h2 className="font-serif text-3xl sm:text-4xl">{d.change.heading}</h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {d.change.steps.map((s, i) => (
              <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="font-serif text-3xl text-[#E0BA73]">{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 leading-relaxed text-white/75">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl leading-relaxed text-white/75">{d.change.note}</p>
        </div>
      </section>

      {/* END GOAL */}
      <section className={`${wrap} grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24`}>
        <Photo
          src={d.images.portrait}
          alt={`${d.name} smiling in a floral blazer`}
          className="aspect-[4/5] w-full max-w-md justify-self-center lg:max-w-none"
        />
        <div>
          <h2 className={h2}>{d.goal.heading}</h2>
          <div className="mt-6">
            <CheckList items={d.goal.items} />
          </div>
          <p className="mt-8 font-serif text-2xl text-[#C59B27]">{d.goal.tagline}</p>
        </div>
      </section>

      {/* THE SHIFT */}
      <section className="bg-[#F6F3EC] py-16 lg:py-20">
        <div className={wrap}>
          <h2 className={h2}>{d.shift.heading}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {d.shift.items.map((s) => (
              <p
                key={s.from}
                className="rounded-2xl border border-[#2D1C59]/10 bg-white p-6 text-lg leading-snug"
              >
                From{" "}
                <span className="text-[#7A8599] line-through decoration-[#C59B27]/60">
                  {s.from}
                </span>
                <br />
                to <span className="font-serif text-2xl text-[#2D1C59]">{s.to}</span>
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* WAYS TO WORK */}
      <section className={`${wrap} grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24`}>
        <div className="order-2 lg:order-1">
          <h2 className={h2}>{d.ways.heading}</h2>
          <ul className="mt-8 divide-y divide-[#2D1C59]/10 border-y border-[#2D1C59]/10">
            {d.ways.items.map((w) => (
              <li key={w} className="py-5 text-lg leading-snug">
                {w}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button variant="primary" size="md" href={d.hero.cta.href}>
              {d.hero.cta.label}
            </Button>
          </div>
        </div>
        <Photo
          src={d.images.work}
          alt={`${d.name} seated, smiling`}
          className="order-1 aspect-[4/5] w-full max-w-md justify-self-center lg:order-2 lg:max-w-none"
        />
      </section>

      {/* ABOUT JANKI */}
      <section className="bg-[#F6F3EC] py-16 lg:py-24">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16`}>
          <Photo
            src={d.images.about}
            alt={`${d.name}, black and white portrait`}
            className="aspect-square w-full max-w-md justify-self-center lg:max-w-none"
            position="object-center"
          />
          <div>
            <h2 className={h2}>{d.about.heading}</h2>
            <div className="mt-6 text-lg">
              <CheckList items={d.about.items} />
            </div>
            <div className="mt-10 rounded-2xl border border-[#2D1C59]/10 bg-white p-6">
              <p className="font-serif text-xl text-[#2D1C59]">{d.name}</p>
              <p className="mt-1 text-[#7A8599]">{d.role}</p>
              <div className="mt-4 flex flex-col gap-1 text-sm sm:flex-row sm:gap-6">
                <a
                  href={d.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0F6F73] underline underline-offset-4"
                >
                  {d.website}
                </a>
                <a
                  href={`mailto:${d.email}`}
                  className="break-all text-[#0F6F73] underline underline-offset-4"
                >
                  {d.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALSO AT INNER BEING WELLNESS */}
      <section className={`${wrap} py-14 lg:py-20`}>
        <div className="flex flex-col gap-6 rounded-2xl border border-[#2D1C59]/10 bg-white p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl text-[#2D1C59]">{d.alsoAt.heading}</h2>
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