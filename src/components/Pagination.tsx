import { arNum } from '../lib/format';

interface Props {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

function visiblePages(current: number, total: number): Array<number | 'ellipsis'> {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: Array<number | 'ellipsis'> = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) pages.push('ellipsis');
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push('ellipsis');
  pages.push(total);
  return pages;
}

const Arrow = ({ dir }: { dir: 'prev' | 'next' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    {dir === 'prev' ? <path d="m9 6 6 6-6 6" /> : <path d="m15 6-6 6 6 6" />}
  </svg>
);

export function Pagination({ page, totalPages, onChange }: Props) {
  if (totalPages <= 1) return null;

  const go = (p: number) => {
    const next = Math.min(totalPages, Math.max(1, p));
    if (next === page) return;
    onChange(next);
  };

  const baseBtn =
    'inline-flex items-center justify-center min-w-10 h-10 px-3 rounded-full font-bold text-[14px] transition-all select-none border-[1.5px]';
  const idleBtn =
    'bg-white border-[#DDE5DD] text-sage-700 hover:border-forest hover:text-forest hover:-translate-y-0.5';
  const activeBtn = 'bg-forest border-forest text-white shadow-[0_6px_18px_rgba(43,107,58,0.25)]';
  const disabledBtn = 'bg-sage-50 border-[#E2EBE3] text-sage-400 cursor-not-allowed';

  return (
    <nav
      aria-label="صفحات الفرص"
      className="mt-10 flex items-center justify-center gap-2 sm:gap-2.5 flex-wrap"
    >
      {/* Previous (in RTL: visually on the right, points right) */}
      <button
        type="button"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        aria-label="الصفحة السابقة"
        className={`${baseBtn} ${page === 1 ? disabledBtn : idleBtn}`}
      >
        <Arrow dir="prev" />
        <span className="hidden sm:inline ms-1">السابق</span>
      </button>

      {/* Desktop: numbered pages */}
      <ul className="hidden sm:flex items-center gap-1.5">
        {visiblePages(page, totalPages).map((p, i) =>
          p === 'ellipsis' ? (
            <li key={`e-${i}`} className="px-1 text-sage-500 select-none">…</li>
          ) : (
            <li key={p}>
              <button
                type="button"
                onClick={() => go(p)}
                aria-current={p === page ? 'page' : undefined}
                aria-label={`الصفحة ${arNum(p)}`}
                className={`${baseBtn} ${p === page ? activeBtn : idleBtn}`}
              >
                {arNum(p)}
              </button>
            </li>
          ),
        )}
      </ul>

      {/* Mobile: compact "X من Y" */}
      <span
        className="sm:hidden inline-flex items-center justify-center h-10 px-4 rounded-full bg-white border-[1.5px] border-[#DDE5DD] text-sage-700 text-[14px] font-bold"
        aria-live="polite"
      >
        {arNum(page)} <span className="mx-1.5 text-sage-400">من</span> {arNum(totalPages)}
      </span>

      {/* Next */}
      <button
        type="button"
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        aria-label="الصفحة التالية"
        className={`${baseBtn} ${page === totalPages ? disabledBtn : idleBtn}`}
      >
        <span className="hidden sm:inline me-1">التالي</span>
        <Arrow dir="next" />
      </button>
    </nav>
  );
}
