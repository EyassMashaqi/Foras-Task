// Inline SVG logo marks for the partners strip.
// Each one is a single-color (currentColor) mark + wordmark, so the parent
// can colorize the whole logo with text-* utilities.

const wrap = 'inline-flex items-center gap-2.5 shrink-0';

export const UNEnvironmentLogo = () => (
  <span className={wrap} aria-label="UN Environment">
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="13" />
      <path d="M16 6c-4 4-4 10 0 16M16 6c4 4 4 10 0 16M5 16h22" />
      <path d="M16 14c-3 0-5-2-5-4 2 0 5 1 5 4z" fill="currentColor" />
    </svg>
    <span className="font-extrabold text-[15px] tracking-wide">UN Environment</span>
  </span>
);

export const UNDPLogo = () => (
  <span className={wrap} aria-label="UNDP">
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4 6 9v7c0 5 4 9 10 11 6-2 10-6 10-11V9l-10-5z" />
      <path d="M10 16h12M16 10v12" />
    </svg>
    <span className="font-extrabold text-[15px] tracking-wide">UNDP</span>
  </span>
);

export const IRENALogo = () => (
  <span className={wrap} aria-label="IRENA">
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="5" fill="currentColor" />
      <path d="M16 2v4M16 26v4M2 16h4M26 16h4M6 6l3 3M23 23l3 3M26 6l-3 3M9 23l-3 3" />
    </svg>
    <span className="font-extrabold text-[15px] tracking-wide">IRENA</span>
  </span>
);

export const ArabYouthCouncilLogo = () => (
  <span className={wrap} aria-label="Arab Youth Council">
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="3.5" />
      <circle cx="21" cy="11" r="3.5" />
      <path d="M4 26c0-4 3-7 7-7s7 3 7 7M14 26c0-4 3-7 7-7s7 3 7 7" />
    </svg>
    <span className="font-extrabold text-[15px] tracking-wide">Arab Youth Council</span>
  </span>
);

export const GCCGreenLogo = () => (
  <span className={wrap} aria-label="GCC Green Initiative">
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 28V14" />
      <path d="M16 14c-5-2-9-5-9-9 5 0 9 3 9 9zM16 14c5-2 9-5 9-9-5 0-9 3-9 9z" fill="currentColor" />
      <path d="M8 28h16" />
    </svg>
    <span className="font-extrabold text-[15px] tracking-wide">GCC Green Initiative</span>
  </span>
);

export const WorldBankLogo = () => (
  <span className={wrap} aria-label="World Bank">
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="12" />
      <path d="M4 16h24" />
      <path d="M16 4c3.5 3.5 5 7.5 5 12s-1.5 8.5-5 12c-3.5-3.5-5-7.5-5-12s1.5-8.5 5-12z" />
    </svg>
    <span className="font-extrabold text-[15px] tracking-wide">World Bank</span>
  </span>
);

export const GIZLogo = () => (
  <span className={wrap} aria-label="GIZ">
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <rect x="4" y="4" width="10" height="10" />
      <rect x="18" y="4" width="10" height="10" fill="currentColor" />
      <rect x="4" y="18" width="10" height="10" fill="currentColor" />
      <rect x="18" y="18" width="10" height="10" />
    </svg>
    <span className="font-extrabold text-[15px] tracking-wide">GIZ</span>
  </span>
);

export const AFESDLogo = () => (
  <span className={wrap} aria-label="AFESD">
    <svg viewBox="0 0 32 32" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 3 29 16 16 29 3 16z" />
      <path d="M16 9v14M9 16h14" />
    </svg>
    <span className="font-extrabold text-[15px] tracking-wide">AFESD</span>
  </span>
);

export const PARTNERS = [
  UNEnvironmentLogo,
  UNDPLogo,
  IRENALogo,
  ArabYouthCouncilLogo,
  GCCGreenLogo,
  WorldBankLogo,
  GIZLogo,
  AFESDLogo,
];
