import type { OpportunityType, FundingStatus } from '../data/opportunities';
import { arNum } from '../lib/format';
import { SortMenu, type SortKey } from './SortMenu';

export type TypeFilter = 'all' | OpportunityType;
export type FundingFilter = 'all' | FundingStatus;

interface FilterBarProps {
  type: TypeFilter;
  funding: FundingFilter;
  sort: SortKey;
  onType: (t: TypeFilter) => void;
  onFunding: (f: FundingFilter) => void;
  onSort: (s: SortKey) => void;
  resultCount: number;
  anyActive: boolean;
  onClear: () => void;
}

const typeDefs: Array<[TypeFilter, string]> = [
  ['all', 'الكل'],
  ['منحة', 'منحة'],
  ['تدريب', 'تدريب'],
  ['مسابقة', 'مسابقة'],
];

const fundingDefs: Array<[FundingFilter, string]> = [
  ['all', 'الكل'],
  ['ممول', 'ممول'],
  ['غير ممول', 'غير ممول'],
];

function pillClass(active: boolean, hue: 'forest' | 'amber') {
  const activeBg = hue === 'forest' ? 'bg-forest border-forest' : 'bg-amber-brand border-amber-brand';
  return [
    'cursor-pointer rounded-full font-bold transition-all select-none',
    'text-[14.5px] px-[18px] py-[9px] border-[1.5px]',
    active ? `${activeBg} text-white` : 'bg-white border-[#DDE5DD] text-sage-700 hover:border-sage-500',
  ].join(' ');
}

export function FilterBar({ type, funding, sort, onType, onFunding, onSort, resultCount, anyActive, onClear }: FilterBarProps) {
  return (
    <div
      id="opps"
      className="sticky top-[72px] z-[90] bg-white/90 backdrop-blur-md border-b border-[#EAEFEA] py-4 px-[clamp(20px,5vw,64px)]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center gap-x-7 gap-y-[18px]">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-[14px] font-bold text-sage-500">النوع</span>
          {typeDefs.map(([key, label]) => (
            <button key={key} onClick={() => onType(key)} className={pillClass(type === key, 'forest')}>
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-[14px] font-bold text-sage-500">التمويل</span>
          {fundingDefs.map(([key, label]) => (
            <button key={key} onClick={() => onFunding(key)} className={pillClass(funding === key, 'amber')}>
              {label}
            </button>
          ))}
        </div>

        <div className="flex items-center flex-wrap gap-3 ms-auto">
          <SortMenu value={sort} onChange={onSort} />
          <span className="text-[14px] font-semibold text-sage-500 whitespace-nowrap">
            {arNum(resultCount)} فرصة
          </span>
          {anyActive && (
            <button
              onClick={onClear}
              className="inline-flex items-center gap-1.5 bg-amber-soft text-amber-dark px-4 py-[9px] rounded-full text-[14px] font-bold transition-colors hover:bg-[#F8E0C0]"
            >
              ✕ مسح الفلاتر
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
