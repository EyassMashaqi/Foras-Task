import { useEffect, useRef, useState } from 'react';

export type SortKey = 'newest' | 'deadline-asc' | 'deadline-desc' | 'alpha';

interface Props {
  value: SortKey;
  onChange: (s: SortKey) => void;
}

const options: Array<{ key: SortKey; label: string }> = [
  { key: 'newest', label: 'الأحدث إضافةً' },
  { key: 'deadline-asc', label: 'الموعد النهائي (الأقرب)' },
  { key: 'deadline-desc', label: 'الموعد النهائي (الأبعد)' },
  { key: 'alpha', label: 'أبجدياً (أ – ي)' },
];

export function SortMenu({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = options.find((o) => o.key === value)!;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 bg-white border-[1.5px] border-[#DDE5DD] text-sage-700 font-bold text-[14px] rounded-full px-4 py-[9px] transition-colors hover:border-forest hover:text-forest"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M3 6h18M6 12h12M10 18h4" />
        </svg>
        <span className="hidden sm:inline">الترتيب:</span>
        <span className="text-forest-dark">{current.label}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-[80] mt-2 end-0 min-w-[240px] bg-white border border-[#E2EBE3] rounded-2xl shadow-[0_18px_42px_rgba(20,55,32,0.14)] p-1.5 animate-fadeUp"
        >
          {options.map((o) => {
            const active = o.key === value;
            return (
              <li key={o.key}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    onChange(o.key);
                    setOpen(false);
                  }}
                  className={`w-full text-right text-[14px] px-3.5 py-2.5 rounded-xl transition-colors flex items-center justify-between gap-2 ${
                    active ? 'bg-sage-100 text-forest font-bold' : 'text-sage-700 hover:bg-sage-50'
                  }`}
                >
                  <span>{o.label}</span>
                  {active && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
