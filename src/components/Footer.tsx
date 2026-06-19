import logoWhite from '../assets/logo-white.png';

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
          <div className="flex gap-3 mt-[22px]">
            {['in', '𝕏', 'f'].map((s) => (
              <span key={s} className="w-10 h-10 rounded-full bg-white/10 inline-flex items-center justify-center">
                {s}
              </span>
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
