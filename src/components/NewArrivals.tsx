import { useRef } from 'react';
import type { Opportunity } from '../data/opportunities';
import { daysLeft, fmtDate, arNum } from '../lib/format';

interface Props {
  items: Opportunity[];
}

const typeBadge: Record<Opportunity['type'], string> = {
  منحة: 'bg-sage-200 text-forest',
  تدريب: 'bg-amber-soft text-amber-dark',
  مسابقة: 'bg-[#EEF4DD] text-[#5E7E1B]',
};

export function NewArrivals({ items }: Props) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  if (items.length === 0) return null;

  const scrollBy = (dir: 'prev' | 'next') => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.85;
    // RTL: scrollLeft decreases going right; we move toward visible "next" by going more negative
    el.scrollBy({ left: dir === 'next' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section className="bg-white px-[clamp(20px,5vw,64px)] pt-12 pb-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between gap-4 mb-5">
          <div>
            <span className="inline-block text-[12.5px] font-bold tracking-[0.18em] text-amber-brand uppercase mb-2">
              أُضيفت حديثاً
            </span>
            <h2 className="m-0 text-2xl sm:text-3xl font-extrabold text-forest-dark">
              فرص وصلت للتو
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy('prev')}
              aria-label="السابق"
              className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white border-[1.5px] border-[#DDE5DD] text-sage-700 hover:border-forest hover:text-forest transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="m9 6 6 6-6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy('next')}
              aria-label="التالي"
              className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-forest text-white hover:bg-amber-brand transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="m15 6-6 6 6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-1 px-1 scrollbar-thin"
          style={{ scrollbarWidth: 'thin' }}
        >
          {items.map((opp) => {
            const dl = daysLeft(opp.deadline);
            const urgent = dl >= 0 && dl <= 14;
            return (
              <article
                key={opp.id}
                className="snap-start shrink-0 w-[260px] sm:w-[290px] bg-white border border-[#EAEFEA] rounded-2xl p-4 flex flex-col gap-2.5 shadow-[0_4px_14px_rgba(20,55,32,0.05)] hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(20,55,32,0.10)] transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-bold ${typeBadge[opp.type]}`}>
                    {opp.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold tracking-wide text-white bg-[#D14343] px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    جديد
                  </span>
                </div>
                <h3 className="m-0 text-[15px] font-extrabold leading-[1.4] text-forest-dark line-clamp-2">
                  {opp.title}
                </h3>
                <div className="flex items-center justify-between text-[12.5px] mt-auto pt-2">
                  <span className="inline-flex items-center gap-1 text-sage-700 font-semibold">
                    <span className="text-base">{opp.flag}</span>
                    {opp.country}
                  </span>
                  <span className={urgent ? 'text-[#D14343] font-bold' : 'text-sage-500 font-semibold'}>
                    {urgent ? `⏰ ${arNum(dl)} يوم` : fmtDate(opp.deadline)}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
