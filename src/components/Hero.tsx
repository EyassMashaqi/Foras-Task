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
  { bottom: '120px', right: '16%', width: '46px', opacity: 0.2, r: '42deg', delay: '1.1s', dur: '8s' },
  { bottom: '80px', left: '7%', width: '84px', opacity: 0.16, r: '-30deg', delay: '0.3s', dur: '10s' },
  { top: '340px', right: '38%', width: '34px', opacity: 0.18, r: '60deg', delay: '1.4s', dur: '6.5s' },
];

export function Hero({ query, onQueryChange }: HeroProps) {
  const opps = useCountUp(800);
  const funded = useCountUp(540);
  const countries = useCountUp(22);

  return (
    <header
      className="relative overflow-hidden text-center pt-[170px] pb-[90px] px-[clamp(20px,5vw,64px)]"
      style={{
        background:
          'radial-gradient(1100px 520px at 72% -8%, #E7F2E8 0%, rgba(231,242,232,0) 60%), radial-gradient(900px 480px at 12% 8%, #FBF1E0 0%, rgba(251,241,224,0) 55%), #FFFFFF',
      }}
    >
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

        <div className="flex flex-wrap justify-center gap-x-[clamp(28px,6vw,72px)] gap-y-7 mb-12">
          <Stat innerRef={opps.ref} value={`${arNum(opps.value)}+`} label="فرصة متاحة" color="text-forest" />
          <div className="w-px bg-sage-300 self-stretch my-1.5" />
          <Stat value={arNum(funded.value)} label="فرصة ممولة بالكامل" color="text-amber-brand" />
          <div className="w-px bg-sage-300 self-stretch my-1.5" />
          <Stat value={arNum(countries.value)} label="دولة عربية" color="text-forest" />
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
    </header>
  );
}

interface StatProps {
  value: string;
  label: string;
  color: string;
  innerRef?: React.Ref<HTMLDivElement>;
}

function Stat({ value, label, color, innerRef }: StatProps) {
  return (
    <div ref={innerRef} className="text-center">
      <div className={`font-black leading-none ${color}`} style={{ fontSize: 'clamp(34px,5vw,54px)' }}>
        {value}
      </div>
      <div className="text-[15px] text-sage-600 font-semibold mt-2">{label}</div>
    </div>
  );
}
