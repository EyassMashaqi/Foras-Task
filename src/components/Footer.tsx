import logoWhite from '../assets/logo-white.png';

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.2 0h4.37v2.05h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.62c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23H7.42V8z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M18.244 2H21l-6.52 7.45L22 22h-6.79l-4.78-6.27L4.8 22H2.04l6.97-7.97L2 2h6.96l4.32 5.78L18.244 2zm-1.19 18h1.69L7.04 4H5.24l11.815 16z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
        <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.14 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.8 8.43-4.94 8.43-9.94z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[18px] h-[18px]">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-forest-deep text-[#E8F0E9]">
      <div className="h-2 bg-amber-brand" />
      <div className="max-w-[1200px] mx-auto pt-14 pb-[30px] px-[clamp(20px,5vw,64px)] grid gap-10 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
        <div>
          <img src={logoWhite} alt="فرص خضراء" className="h-24 w-auto mb-[18px]" />
          <p className="m-0 text-[15px] leading-[1.8] text-sage-400 max-w-[280px]">
            منصة عربية تجمع الفرص الخضراء للشباب الطامح إلى مستقبلٍ مستدام.
          </p>
        </div>

        <div>
          <h4 className="m-0 mb-[18px] text-base font-extrabold text-white">روابط سريعة</h4>
          <div className="flex flex-col gap-3 text-[15px]">
            <a href="#" className="text-sage-400 transition-colors hover:text-amber-brand">الرئيسية</a>
            <a href="#opps" className="text-sage-400 transition-colors hover:text-amber-brand">تصفّح الفرص</a>
            <a href="#" className="text-sage-400 transition-colors hover:text-amber-brand">عن المنصة</a>
            <a href="#" className="text-sage-400 transition-colors hover:text-amber-brand">الأسئلة الشائعة</a>
          </div>
        </div>

        <div>
          <h4 className="m-0 mb-[18px] text-base font-extrabold text-white">تواصل معنا</h4>
          <div className="flex flex-col gap-3 text-[15px] text-sage-400">
            <span className="inline-flex items-center gap-2.5">🌐 www.foras-khadra.org</span>
            <span className="inline-flex items-center gap-2.5">✉️ hello@foras-khadra.org</span>
          </div>
          <div className="flex gap-2.5 mt-[22px]">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-white/10 inline-flex items-center justify-center text-white/85 transition-all hover:bg-amber-brand hover:text-white hover:-translate-y-0.5"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-[22px] px-[clamp(20px,5vw,64px)] max-w-[1200px] mx-auto flex flex-wrap gap-3 items-center justify-between">
        <span className="text-[14px] text-[#8FA896]">© ٢٠٢٦ فرص خضراء. جميع الحقوق محفوظة.</span>
        <span className="text-base font-extrabold text-white">معاً نحو مستقبلٍ أخضر 🌿</span>
      </div>
    </footer>
  );
}
