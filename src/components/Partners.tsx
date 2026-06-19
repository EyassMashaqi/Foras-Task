import { PARTNERS } from './partnerLogos';

export function Partners() {
  // Duplicate the list so translating by -50% lands on an identical position.
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-white border-y border-[#EAEFEA] py-8">
      <div className="max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)]">
        <p className="text-center text-[12.5px] font-bold tracking-[0.18em] text-sage-500 uppercase mb-6">
          بثقة شركائنا في الاستدامة
        </p>

        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0, #000 8%, #000 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to left, transparent 0, #000 8%, #000 92%, transparent 100%)',
          }}
        >
          {/*
            Important: no `gap` here. Each slot below has equal padding-inline-end,
            so the strip's total width is exactly 2× the half — and translateX(-50%)
            lands on a pixel-perfect duplicate of position 0. That removes the
            half-gap "jump" you get from gap-based marquees.
          */}
          <div
            className="flex w-max animate-marquee will-change-transform"
            style={{ direction: 'ltr' }}
          >
            {loop.map((Logo, i) => (
              <span
                key={i}
                className="shrink-0 pe-12 sm:pe-16 text-sage-500 hover:text-forest transition-colors"
              >
                <Logo />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
