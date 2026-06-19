import { useState } from 'react';

const faqs = [
  {
    q: 'كيف أستخدم منصة فرص خضراء؟',
    a: 'يكفي تصفّح صفحة الفرص أعلاه واستخدام الفلاتر والبحث للعثور على ما يناسبك، ثم الضغط على «قدّم الآن» للانتقال إلى الجهة المنظِّمة لإكمال طلبك.',
  },
  {
    q: 'هل التسجيل في المنصة مجاني؟',
    a: 'نعم، التصفّح والبحث والاطلاع على الفرص مجاني بالكامل. لا نتقاضى أي رسوم من المستخدمين أو الجهات المُعلِنة.',
  },
  {
    q: 'هل جميع الفرص ممولة بالكامل؟',
    a: 'لا — هناك فرص ممولة بالكامل وأخرى جزئية أو غير ممولة. يمكنك تصفية النتائج عبر فلتر «التمويل» في الأعلى لرؤية الممولة فقط.',
  },
  {
    q: 'كيف أُضيف فرصة من جهتي؟',
    a: 'اضغط على زر «أضف فرصتك» في الشريط العلوي، واملأ النموذج بتفاصيل الفرصة. سيراجعها فريقنا خلال ٤٨ ساعة قبل النشر.',
  },
  {
    q: 'هل أتلقّى إشعارات بالفرص الجديدة؟',
    a: 'نعم، يمكنك الاشتراك في النشرة البريدية بالأسفل واختيار الفئات التي تهمك، فتصلك أحدث الفرص والمواعيد النهائية مباشرةً.',
  },
  {
    q: 'هل الفرص متاحة لجميع الدول العربية؟',
    a: 'نغطي حالياً ٢٢ دولة عربية. بعض الفرص مفتوحة لجميع الجنسيات، وأخرى مخصّصة لدولٍ بعينها — تفاصيل الأهلية مذكورة في كل فرصة.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white px-[clamp(20px,5vw,64px)] py-20">
      <div className="max-w-[860px] mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-[13px] font-bold tracking-[0.18em] text-forest uppercase mb-3">
            الأسئلة الشائعة
          </span>
          <h2 className="m-0 text-3xl md:text-4xl font-extrabold text-forest-dark">
            كل ما تحتاج معرفته
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const expanded = open === i;
            return (
              <div
                key={f.q}
                className={`bg-white border rounded-2xl overflow-hidden transition-all ${
                  expanded ? 'border-forest shadow-[0_10px_28px_rgba(20,55,32,0.08)]' : 'border-[#E2EBE3]'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-right"
                >
                  <span className={`text-[15.5px] sm:text-[17px] font-extrabold ${expanded ? 'text-forest' : 'text-forest-dark'}`}>
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                      expanded ? 'bg-forest text-white rotate-45' : 'bg-sage-100 text-forest'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" className="w-4 h-4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 px-5 sm:px-6 pb-5 sm:pb-6 text-[14.5px] leading-[1.85] text-sage-600">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
