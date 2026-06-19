interface Testimonial {
  name: string;
  initials: string;
  role: string;
  country: string;
  flag: string;
  quote: string;
  tint: string;
}

const items: Testimonial[] = [
  {
    name: 'سارة العتيبي',
    initials: 'س.ع',
    role: 'مهندسة طاقة متجددة',
    country: 'السعودية',
    flag: '🇸🇦',
    quote:
      'فرص خضراء غيّرت مسار حياتي المهنية — حصلت على منحة كاملة لدراسة هندسة الطاقة الشمسية، وكوّنت شبكة علاقاتٍ إقليمية لا تُقدّر بثمن.',
    tint: 'bg-sage-200 text-forest',
  },
  {
    name: 'يوسف العبادي',
    initials: 'ي.ع',
    role: 'باحث في الاقتصاد الدائري',
    country: 'الأردن',
    flag: '🇯🇴',
    quote:
      'وجدت في المنصة فرصاً حقيقية لا أجدها في أي مكانٍ آخر. التدريب الذي حصلت عليه فتح لي أبواب العمل مع منظماتٍ دولية.',
    tint: 'bg-amber-soft text-amber-brand',
  },
  {
    name: 'ليلى بنحدّو',
    initials: 'ل.ب',
    role: 'رائدة أعمالٍ بيئية',
    country: 'المغرب',
    flag: '🇲🇦',
    quote:
      'بدأت مشروعي الصغير لإعادة التدوير بفضل مسابقةٍ اكتشفتها عبر المنصة. اليوم نحن فريق من ١٢ شخصاً ونخدم ثلاث مدن.',
    tint: 'bg-[#EEF4DD] text-[#5E7E1B]',
  },
];

const Stars = () => (
  <div className="inline-flex gap-0.5 text-amber-brand">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2 14.95 8.6 22 9.27l-5.45 4.73L18.18 21 12 17.27 5.82 21l1.63-6.99L2 9.27l7.05-.67L12 2z" />
      </svg>
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section className="bg-sage-50 px-[clamp(20px,5vw,64px)] py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[13px] font-bold tracking-[0.18em] text-forest uppercase mb-3">
            تجارب من المنصة
          </span>
          <h2 className="m-0 text-3xl md:text-4xl font-extrabold text-forest-dark">
            شهادات المستفيدين
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="group relative bg-white rounded-[22px] border border-[#EAEFEA] p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(20,55,32,0.10)] hover:border-[#BBD6C0]"
            >
              <span className="absolute -top-3 right-7 text-6xl leading-none text-forest/15 select-none font-black">“</span>
              <Stars />
              <blockquote className="m-0 text-[15px] leading-[1.85] text-sage-700">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3.5 mt-2 pt-4 border-t border-[#EDF1ED]">
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-extrabold text-[14px] ${t.tint}`}
                >
                  {t.initials}
                </span>
                <div className="flex flex-col">
                  <span className="font-extrabold text-forest-dark text-[15px] leading-tight">{t.name}</span>
                  <span className="text-[12.5px] text-sage-500 mt-0.5">
                    {t.role} · <span className="text-base align-middle">{t.flag}</span> {t.country}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
