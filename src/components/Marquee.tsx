import { MARQUEE_ITEMS } from '../constants';

export function Marquee() {
  return (
    <div className="bg-ink text-paper py-5.5 overflow-hidden border-y-[3px] border-amber">
      <div className="flex w-max animate-marquee">
        <div className="flex gap-15 shrink-0 px-7.5">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="font-narrow font-bold text-[22px] uppercase tracking-[0.04em] flex items-center gap-15 after:content-['✦'] after:text-amber after:text-[14px]">
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-15 shrink-0 px-7.5">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i + 100} className="font-narrow font-bold text-[22px] uppercase tracking-[0.04em] flex items-center gap-15 after:content-['✦'] after:text-amber after:text-[14px]">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
