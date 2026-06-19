const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: 'فرص مُختارة بعناية',
    desc: 'كل فرصة في المنصة تمر عبر فلترة دقيقة لضمان جودتها وملاءمتها للشباب العربي.',
    accent: 'text-forest bg-sage-200',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'تغطية إقليمية كاملة',
    desc: 'منح وتدريبات ومسابقات من ٢٢ دولة عربية، تجمعها لك في مكانٍ واحد.',
    accent: 'text-amber-brand bg-amber-soft',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'تحديث مستمر',
    desc: 'فرص جديدة كل أسبوع، وتنبيهات بالمواعيد النهائية قبل انتهائها.',
    accent: 'text-[#5E7E1B] bg-[#EEF4DD]',
  },
];

export function Highlights() {
  return (
    <section className="bg-white px-[clamp(20px,5vw,64px)] py-20">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[13px] font-bold tracking-[0.18em] text-forest uppercase mb-3">
            لماذا فرص خضراء
          </span>
          <h2 className="m-0 text-3xl md:text-4xl font-extrabold text-forest-dark">
            منصة واحدة، عشرات الفرص الموثوقة
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative rounded-[20px] bg-white border border-[#EAEFEA] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(20,55,32,0.10)] hover:border-[#BBD6C0]"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110 ${it.accent}`}
              >
                {it.icon}
              </div>
              <h3 className="m-0 mb-2 text-lg font-extrabold text-forest-dark">{it.title}</h3>
              <p className="m-0 text-[14.5px] leading-[1.75] text-sage-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
