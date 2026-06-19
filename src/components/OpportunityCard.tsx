import { useState } from 'react';
import type { Opportunity } from '../data/opportunities';
import { arNum, daysLeft, fmtDate } from '../lib/format';
import { highlight } from '../lib/highlight';

interface Props {
  opp: Opportunity;
  index: number;
  query?: string;
  isNew?: boolean;
  variant?: 'elevated' | 'outlined';
}

const typeMeta: Record<
  Opportunity['type'],
  { badge: string; accent: string; icon: React.ReactNode }
> = {
  منحة: {
    badge: 'bg-sage-200 text-forest',
    accent: 'bg-gradient-to-l from-forest via-forest/70 to-forest/40',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
      </svg>
    ),
  },
  تدريب: {
    badge: 'bg-amber-soft text-amber-dark',
    accent: 'bg-gradient-to-l from-amber-brand via-amber-brand/70 to-amber-brand/40',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
      </svg>
    ),
  },
  مسابقة: {
    badge: 'bg-[#EEF4DD] text-[#5E7E1B]',
    accent: 'bg-gradient-to-l from-[#5E7E1B] via-[#5E7E1B]/70 to-[#5E7E1B]/40',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <path d="M6 9V4h12v5a6 6 0 0 1-12 0z" />
        <path d="M6 9H3v2a3 3 0 0 0 3 3M18 9h3v2a3 3 0 0 1-3 3M9 21h6M12 15v6" />
      </svg>
    ),
  },
};

export function OpportunityCard({ opp, index, query = '', isNew = false, variant = 'elevated' }: Props) {
  const [saved, setSaved] = useState(false);
  const dl = daysLeft(opp.deadline);
  const urgent = dl >= 0 && dl <= 14;
  const meta = typeMeta[opp.type];

  const cardClasses = [
    'group relative flex flex-col gap-3.5 rounded-[18px] p-[22px] pt-[26px] bg-white overflow-hidden transition-all duration-[250ms]',
    'hover:-translate-y-2 hover:shadow-[0_22px_48px_rgba(43,107,58,0.20)] hover:border-[#BBD6C0]',
    variant === 'outlined'
      ? 'border-[1.5px] border-forest/30'
      : 'border border-[#EAEFEA] shadow-[0_6px_22px_rgba(20,55,32,0.07)]',
  ].join(' ');

  return (
    <article
      className={cardClasses}
      style={{
        animation: 'riseIn .5s ease both',
        animationDelay: `${index * 70}ms`,
      }}
    >
      {/* Type-colored accent strip */}
      <span className={`absolute inset-x-0 top-0 h-1 ${meta.accent}`} />

      {/* NEW badge */}
      {isNew && (
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-[#D14343] text-white text-[11px] font-extrabold tracking-wide px-2 py-0.5 rounded-full shadow-[0_4px_12px_rgba(209,67,67,0.35)]">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          جديد
        </span>
      )}

      {/* Bookmark button */}
      <button
        type="button"
        aria-label={saved ? 'إلغاء حفظ الفرصة' : 'حفظ الفرصة'}
        aria-pressed={saved}
        onClick={() => setSaved((v) => !v)}
        className={`absolute top-3 left-3 inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
          saved ? 'bg-forest text-white' : 'bg-sage-50 text-sage-500 hover:bg-sage-200 hover:text-forest'
        }`}
      >
        <svg viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      <div className="flex flex-wrap gap-[9px] pr-12">
        <span
          className={`inline-flex items-center gap-1.5 px-[13px] py-[5px] rounded-full text-[13px] font-bold whitespace-nowrap ${meta.badge}`}
        >
          {meta.icon}
          {opp.type}
        </span>
        <span
          className={
            opp.funding === 'ممول'
              ? 'inline-flex items-center gap-1.5 px-[13px] py-[5px] rounded-full text-[13px] font-bold whitespace-nowrap bg-forest text-white'
              : 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[13px] font-bold whitespace-nowrap bg-transparent text-sage-600 border-[1.5px] border-[#CDD7D0]'
          }
        >
          {opp.funding}
        </span>
      </div>

      <h3 className="m-0 text-[19px] font-extrabold leading-[1.4] text-forest-dark">
        {highlight(opp.title, query)}
      </h3>
      <p className="m-0 flex-1 text-[14.5px] leading-[1.75] text-sage-600">
        {highlight(opp.desc, query)}
      </p>

      <div className="h-px bg-[#EDF1ED] my-0.5" />

      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-sage-700">
          <span className="text-[18px]">{opp.flag}</span>
          {opp.country}
        </span>
        <span
          className={
            urgent
              ? 'inline-flex items-center gap-1 text-[#D14343] font-bold text-[13.5px] whitespace-nowrap'
              : 'inline-flex items-center gap-1 text-sage-500 font-semibold text-[13px] whitespace-nowrap'
          }
        >
          {urgent ? `⏰ ${arNum(dl)} يوم متبقٍ` : `الموعد النهائي: ${fmtDate(opp.deadline)}`}
        </span>
      </div>

      <a
        href="#"
        className="group/cta relative inline-flex items-center justify-center gap-2 bg-forest text-white py-[13px] rounded-xl font-bold text-[15.5px] overflow-hidden transition-colors hover:bg-amber-brand"
      >
        <span>قدّم الآن</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 group-hover/cta:-translate-x-1">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
      </a>
    </article>
  );
}
