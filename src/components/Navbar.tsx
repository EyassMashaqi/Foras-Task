import { useEffect, useState } from 'react';
import logoGreen from '../assets/logo-green.png';
import logoWhite from '../assets/logo-white.png';
import { useScrolled } from '../hooks/useScrolled';

const links = [
  { href: '#', label: 'الرئيسية' },
  { href: '#opps', label: 'الفرص' },
  { href: '#', label: 'عن المنصة' },
  { href: '#footer', label: 'تواصل معنا' },
];

export function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const linkColor = scrolled || open ? 'text-white' : 'text-forest-dark';

  return (
    <nav
      className={[
        'fixed inset-x-0 top-0 z-[100] h-[72px] flex items-center justify-between',
        'px-[clamp(16px,5vw,64px)] transition-[background,box-shadow,border-color] duration-300',
        scrolled || open
          ? 'bg-[rgba(16,46,26,0.92)] backdrop-blur-md shadow-[0_6px_26px_rgba(0,0,0,0.20)] border-b border-white/10'
          : 'bg-transparent border-b border-transparent',
      ].join(' ')}
    >
      <a href="#" className="relative block h-[44px] sm:h-[50px]" onClick={() => setOpen(false)}>
        <img
          src={logoGreen}
          alt="فرص خضراء"
          className={`h-[44px] sm:h-[50px] w-auto block transition-opacity duration-300 ${
            scrolled || open ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={logoWhite}
          alt="فرص خضراء"
          className={`h-[44px] sm:h-[50px] w-auto block absolute top-0 right-0 transition-opacity duration-300 ${
            scrolled || open ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </a>

      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-[clamp(16px,2.4vw,34px)]">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className={`text-[15px] font-bold transition-colors hover:text-amber-brand ${linkColor}`}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#"
          className="bg-amber-brand text-white px-[22px] py-[10px] rounded-full font-bold text-[15px] shadow-[0_6px_18px_rgba(232,146,26,0.32)] transition-transform hover:-translate-y-0.5"
        >
          أضف فرصتك
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        type="button"
        aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors ${
          scrolled || open ? 'text-white hover:bg-white/10' : 'text-forest-dark hover:bg-black/5'
        }`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          {open ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bg-[rgba(16,46,26,0.96)] backdrop-blur-md border-t border-white/10 transition-[max-height,opacity] duration-300 overflow-hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-1 px-[clamp(16px,5vw,40px)] py-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-white text-[17px] font-bold py-3 border-b border-white/10 transition-colors hover:text-amber-brand"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="mt-4 text-center bg-amber-brand text-white px-[22px] py-3 rounded-full font-bold text-[15px] shadow-[0_6px_18px_rgba(232,146,26,0.32)]"
          >
            أضف فرصتك
          </a>
        </div>
      </div>
    </nav>
  );
}
