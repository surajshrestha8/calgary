import { MARQUEE_ITEMS } from '../constants';

const itemClassName =
  "font-narrow font-bold text-[22px] uppercase tracking-[0.04em] flex items-center gap-15 shrink-0 after:content-['✦'] after:text-amber after:text-[14px]";

export function Marquee() {
  return (
    <div className="relative z-0 bg-ink text-paper py-5.5 overflow-hidden border-b-[3px] border-amber">
      <div className="marquee-track">
        <div className="flex gap-15 shrink-0 px-7.5">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className={itemClassName}>
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-15 shrink-0 px-7.5" aria-hidden>
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={`dup-${i}`} className={itemClassName}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
