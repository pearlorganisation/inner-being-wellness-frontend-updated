import HeroVisual from "@/components/HeroVisual";

/**
 * PageHero — poora hero ek component mein (text left + visual right).
 * Har page ka purana hero section isse replace kar do.
 *
 * <PageHero
 *   badge="OUR ORIGIN STORY"
 *   title="From Executive Leadership to Inner Transformation"
 *   description="Fix the Being first, and the Doing will naturally follow."
 *   image={{ src: "/asset/aistudio/Balancing_stones_and_botanical_leaves_cdede477.png", alt: "..." }}
 *   logo={{ src: "/asset/aistudio/sinner_being_logo_1791870134219_08a12639.png", alt: "Inner Being Wellness logo" }}
 * />
 */
export default function PageHero({
  badge,
  title,
  description,
  image,
  logo,
  children, // optional: buttons / extra content text ke neeche
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#2D1C59]/10 bg-[#FAF7F2] py-12 sm:py-16 lg:py-24">
      {/* soft background decoration */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E4ECE6]/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
          {/* LEFT */}
          <div className="space-y-4">
            {badge && (
              <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#B88B4A] sm:text-xs">
                <span className="h-px w-6 bg-[#B88B4A]" />
                {badge}
                <span className="h-px w-6 bg-[#B88B4A]" />
              </div>
            )}

            <h1 className="font-serif text-3xl leading-[1.15] text-[#2D1C59] sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            {description && (
              <p className="max-w-xl text-base leading-relaxed text-[#475A51] sm:text-lg">
                {description}
              </p>
            )}

            {children}
          </div>

          {/* RIGHT */}
          <HeroVisual image={image} logo={logo} />
        </div>
      </div>
    </section>
  );
}