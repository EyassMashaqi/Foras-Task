import leaf from '../assets/leaf.png';

interface Props {
  onClear: () => void;
}

export function EmptyState({ onClear }: Props) {
  return (
    <div className="text-center py-[70px] px-5 animate-fadeUp">
      <img src={leaf} alt="" className="mx-auto w-[70px] opacity-40 mb-[18px] -rotate-[20deg]" />
      <h3 className="m-0 mb-2.5 text-2xl font-extrabold text-forest-dark">لا توجد فرص مطابقة لبحثك</h3>
      <p className="m-0 mb-[26px] text-base text-sage-600">جرّب تعديل الفلاتر أو تغيير الكلمات المفتاحية.</p>
      <button
        onClick={onClear}
        className="bg-forest text-white px-7 py-3.5 rounded-full text-base font-bold shadow-[0_8px_22px_rgba(43,107,58,0.28)] transition-transform hover:-translate-y-0.5"
      >
        عرض جميع الفرص
      </button>
    </div>
  );
}
