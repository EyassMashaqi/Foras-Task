import { useState, type FormEvent } from 'react';

const categories = ['منح', 'تدريبات', 'مسابقات'] as const;
type Category = (typeof categories)[number];

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [selected, setSelected] = useState<Set<Category>>(new Set(['منح', 'تدريبات', 'مسابقات']));
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggle = (c: Category) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!ok) {
      setError('يرجى إدخال بريد إلكتروني صحيح.');
      return;
    }
    if (selected.size === 0) {
      setError('اختر فئةً واحدةً على الأقل.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="bg-forest-deep px-[clamp(20px,5vw,64px)] py-20 relative overflow-hidden">
      {/* decorative blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(closest-side, #E8921A, transparent)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(closest-side, #2B6B3A, transparent)' }}
      />

      <div className="relative max-w-[860px] mx-auto text-center text-white">
        <span className="inline-block text-[13px] font-bold tracking-[0.18em] text-amber-brand uppercase mb-3">
          نشرة الفرص الخضراء
        </span>
        <h2 className="m-0 mb-3 text-3xl md:text-4xl font-extrabold">
          اشترك لتصلك أحدث الفرص
        </h2>
        <p className="m-0 mb-10 text-[16px] leading-[1.7] text-sage-400 max-w-[560px] mx-auto">
          ابقَ على اطلاعٍ بأحدث المنح والتدريبات والمسابقات البيئية في الوطن العربي.
          اختر الفئات التي تهمك وسنرسل لك ملخصاً أسبوعياً.
        </p>

        {!submitted ? (
          <form onSubmit={onSubmit} className="flex flex-col gap-5 items-center">
            <div className="flex flex-wrap justify-center gap-2.5">
              {categories.map((c) => {
                const active = selected.has(c);
                return (
                  <button
                    type="button"
                    key={c}
                    onClick={() => toggle(c)}
                    aria-pressed={active}
                    className={`px-4 py-2 rounded-full text-[14px] font-bold transition-all border-[1.5px] ${
                      active
                        ? 'bg-amber-brand border-amber-brand text-white shadow-[0_6px_18px_rgba(232,146,26,0.32)]'
                        : 'bg-transparent border-white/25 text-sage-400 hover:border-white/60 hover:text-white'
                    }`}
                  >
                    {active && '✓ '}{c}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-[520px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="بريدك الإلكتروني"
                required
                className="flex-1 text-[16px] text-forest-ink bg-white rounded-full outline-none border-2 border-transparent px-6 py-3.5 transition-colors focus:border-amber-brand"
              />
              <button
                type="submit"
                className="bg-amber-brand hover:bg-amber-dark text-white font-extrabold text-[15.5px] rounded-full px-7 py-3.5 transition-all hover:-translate-y-0.5 shadow-[0_8px_22px_rgba(232,146,26,0.32)]"
              >
                اشترك الآن
              </button>
            </div>

            {error && <p className="m-0 text-[13.5px] text-[#FFB4B4]">{error}</p>}
            <p className="m-0 text-[12.5px] text-sage-400/80">
              لن نشارك بريدك مع أحد. يمكنك إلغاء الاشتراك في أي وقت.
            </p>
          </form>
        ) : (
          <div className="inline-flex flex-col items-center gap-3 bg-white/5 border border-white/15 rounded-2xl p-7">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-forest text-white text-2xl">
              ✓
            </span>
            <h3 className="m-0 text-xl font-extrabold text-white">تمّ الاشتراك بنجاح!</h3>
            <p className="m-0 text-[14.5px] text-sage-400">
              ستصلك أولى الفرص خلال أيامٍ قليلة. شكراً لانضمامك إلى مجتمعنا 🌿
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
