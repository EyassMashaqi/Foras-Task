import leaf from '../assets/leaf.png';
import { useCountUp } from '../hooks/useCountUp';
import { arNum } from '../lib/format';

interface HeroProps {
  query: string;
  onQueryChange: (q: string) => void;
}

const leaves = [
  { top: '120px', right: '8%', width: '74px', opacity: 0.3, r: '-18deg', delay: '0s', dur: '7s' },
  { top: '230px', left: '10%', width: '54px', opacity: 0.22, r: '24deg', delay: '0.6s', dur: '9s' },
  { bottom: '180px', right: '16%', width: '46px', opacity: 0.2, r: '42deg', delay: '1.1s', dur: '8s' },
  { bottom: '140px', left: '7%', width: '84px', opacity: 0.16, r: '-30deg', delay: '0.3s', dur: '10s' },
  { top: '340px', right: '38%', width: '34px', opacity: 0.18, r: '60deg', delay: '1.4s', dur: '6.5s' },
];

const statIcons = {
  opps: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6l-8-4z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  funded: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9 10h4.5a1.5 1.5 0 0 1 0 3H10a1.5 1.5 0 0 0 0 3h5" />
    </svg>
  ),
  countries: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 4 9 14 14 0 0 1-4 9 14 14 0 0 1-4-9 14 14 0 0 1 4-9z" />
    </svg>
  ),
};

export function Hero({ query, onQueryChange }: HeroProps) {
  const opps = useCountUp(800);
  const funded = useCountUp(540);
  const countries = useCountUp(22);

  return (
    <header
      className="relative overflow-hidden text-center pt-[170px] pb-[140px] px-[clamp(20px,5vw,64px)]"
      style={{
        background:
          'radial-gradient(1100px 520px at 72% -8%, #E7F2E8 0%, rgba(231,242,232,0) 60%), radial-gradient(900px 480px at 12% 8%, #FBF1E0 0%, rgba(251,241,224,0) 55%), #FFFFFF',
      }}
    >
      {/* dotted pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(rgba(43,107,58,0.18) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage: 'radial-gradient(circle at 50% 30%, #000 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 30%, #000 0%, transparent 70%)',
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-0">
        {leaves.map((l, i) => (
          <img
            key={i}
            src={leaf}
            alt=""
            className="absolute animate-floaty"
            style={{
              top: l.top,
              bottom: l.bottom,
              left: l.left,
              right: l.right,
              width: l.width,
              opacity: l.opacity,
              ['--r' as string]: l.r,
              animationDuration: l.dur,
              animationDelay: l.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-[1] max-w-[920px] mx-auto">
        <span className="inline-flex items-center gap-2 bg-sage-100 text-forest font-bold text-[15px] px-[18px] py-[9px] rounded-full mb-[26px] border border-[#D4E7D6] animate-fadeUp">
          🌱 منصة الفرص الخضراء للشباب العربي
        </span>

        <h1
          className="m-0 mb-[18px] font-black leading-[1.08] tracking-[-0.5px] text-forest-ink animate-fadeUp"
          style={{ fontSize: 'clamp(38px,6.4vw,76px)' }}
        >
          فرصتك الخضراء تبدأ من هنا
        </h1>

        <p
          className="max-w-[620px] mx-auto mb-10 leading-[1.7] font-medium text-sage-600 animate-fadeUp"
          style={{ fontSize: 'clamp(17px,2vw,21px)', animationDelay: '.12s' }}
        >
          اكتشف مئات المنح والتدريبات والمسابقات البيئية المصمّمة خصيصاً للشباب العربي
          الطامح إلى صناعة مستقبلٍ أكثر استدامة.
        </p>

        {/* Stat chips */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-[760px] mx-auto mb-12">
          <StatChip
            innerRef={opps.ref}
            icon={statIcons.opps}
            value={`${arNum(opps.value)}+`}
            label="فرصة متاحة"
            tone="forest"
          />
          <StatChip
            icon={statIcons.funded}
            value={arNum(funded.value)}
            label="فرصة ممولة بالكامل"
            tone="amber"
          />
          <StatChip
            icon={statIcons.countries}
            value={arNum(countries.value)}
            label="دولة عربية"
            tone="forest"
          />
        </div>

        <div
          className="relative max-w-[640px] mx-auto animate-fadeUp"
          style={{ animationDelay: '.2s' }}
        >
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="#7E9685"
            strokeWidth="2.2"
            strokeLinecap="round"
            className="absolute right-[22px] top-1/2 -translate-y-1/2"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.5" y2="16.5" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="ابحث عن منحة، تدريب، أو دولة..."
            className="w-full text-[17px] text-forest-ink bg-white rounded-full outline-none border-[1.5px] border-sage-300 py-[19px] pr-[58px] pl-[24px] shadow-[0_12px_36px_rgba(20,55,32,0.09)] transition-[border-color,box-shadow] focus:border-forest focus:shadow-[0_12px_40px_rgba(43,107,58,0.18)]"
          />
        </div>
      </div>

      {/* Organic curved wave separator */}
      <svg
        aria-hidden
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[80px] sm:h-[110px]"
      >
        <path
          d="M0 60 C 240 110, 480 0, 720 40 C 960 80, 1200 30, 1440 70 L1440 110 L0 110 Z"
          fill="#F4F8F3"
        />
      </svg>
    </header>
  );
}

interface ChipProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  tone: 'forest' | 'amber';
  innerRef?: React.Ref<HTMLDivElement>;
}

function StatChip({ value, label, icon, tone, innerRef }: ChipProps) {
  const iconBg = tone === 'forest' ? 'bg-sage-200 text-forest' : 'bg-amber-soft text-amber-brand';
  const numberColor = tone === 'forest' ? 'text-forest' : 'text-amber-brand';

  return (
    <div
      ref={innerRef}
      className="group flex items-center gap-3.5 bg-white border border-[#E2EBE3] rounded-2xl px-4 py-3.5 shadow-[0_8px_24px_rgba(20,55,32,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,55,32,0.10)]"
    >
      <span
        className={`shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl ${iconBg} transition-transform duration-300 group-hover:scale-110`}
      >
        {icon}
      </span>
      <div className="text-right">
        <div className={`font-black leading-none ${numberColor}`} style={{ fontSize: 'clamp(22px,3vw,30px)' }}>
          {value}
        </div>
        <div className="text-[13px] text-sage-600 font-semibold mt-1">{label}</div>
      </div>
    </div>
  );
}
