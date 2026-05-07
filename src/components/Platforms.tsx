import Image from 'next/image';
import { PLATFORMS } from '../constants';

export function Platforms() {
  return (
    <div className="bg-paper py-15 border-y border-ink/10">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_2fr] items-center gap-10">
          <div className="font-narrow font-bold text-[18px] uppercase leading-[1.2]">
            <span className="block font-mono text-[11px] text-ink-3 tracking-[0.08em] font-normal mb-1">{'// SUPPORTED CHANNELS'}</span>
            We prep for every<br />major marketplace
          </div>
          <div className="flex flex-wrap gap-8 items-center">
            {PLATFORMS.map((p, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-2 group cursor-default"
                title={p.name}
              >
                <div className="h-11 min-w-[5.5rem] max-w-[7.5rem] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={120}
                    height={44}
                    sizes="120px"
                    className="max-h-9 w-full object-contain object-center"
                  />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-ink-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
