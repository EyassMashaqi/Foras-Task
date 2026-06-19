import type { Opportunity } from '../data/opportunities';
import { arNum, daysLeft, fmtDate } from '../lib/format';

interface Props {
  opp: Opportunity;
  index: number;
  variant?: 'elevated' | 'outlined';
}

const typeStyles: Record<Opportunity['type'], string> = {
  منحة: 'bg-sage-200 text-forest',
  تدريب: 'bg-amber-soft text-amber-dark',
  مسابقة: 'bg-[#EEF4DD] text-[#5E7E1B]',
};

export function OpportunityCard({ opp, index, variant = 'elevated' }: Props) {
  const dl = daysLeft(opp.deadline);
  const urgent = dl >= 0 && dl <= 14;

  const cardClasses = [
    'group flex flex-col gap-3.5 rounded-[18px] p-[22px] bg-white transition-all duration-[250ms]',
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
      <div className="flex flex-wrap gap-[9px]">
        <span
          className={`inline-flex items-center gap-1.5 px-[13px] py-[5px] rounded-full text-[13px] font-bold whitespace-nowrap ${typeStyles[opp.type]}`}
        >
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

      <h3 className="m-0 text-[19px] font-extrabold leading-[1.4] text-forest-dark">{opp.title}</h3>
      <p className="m-0 flex-1 text-[14.5px] leading-[1.75] text-sage-600">{opp.desc}</p>

      <div className="h-px bg-[#EDF1ED] my-0.5" />

      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-sage-700">
          <span className="text-[18px]">{opp.flag}</span>
          {opp.country}
        </span>
        <span
          className={
            urgent
              ? 'text-[#D14343] font-bold text-[13.5px] whitespace-nowrap'
              : 'text-sage-500 font-semibold text-[13px] whitespace-nowrap'
          }
        >
          {urgent ? `⏰ ${arNum(dl)} يوم متبقٍ` : `الموعد النهائي: ${fmtDate(opp.deadline)}`}
        </span>
      </div>

      <a
        href="#"
        className="block text-center bg-forest text-white py-[13px] rounded-xl font-bold text-[15.5px] transition-colors hover:bg-amber-brand"
      >
        قدّم الآن
      </a>
    </article>
  );
}
