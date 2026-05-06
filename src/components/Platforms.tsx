import { PLATFORMS } from '../constants';

export function Platforms() {
  return (
    <div className="bg-paper py-15 border-y border-ink/10">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_2fr] items-center gap-10">
          <div className="font-narrow font-bold text-[18px] uppercase leading-[1.2]">
            <span className="block font-mono text-[11px] text-ink-3 tracking-[0.08em] font-normal mb-1">// SUPPORTED CHANNELS</span>
            We prep for every<br />major marketplace
          </div>
          <div className="flex flex-wrap gap-8 items-center">
            {PLATFORMS.map((p, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-2 group cursor-default"
                title={p.name}
              >
                <div className="w-12 h-12 flex items-center justify-center grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-1">
                   <img 
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${p.icon}.svg`} 
                    alt={p.name} 
                    className="w-8 h-8 object-contain"
                    style={{ filter: 'invert(8%) sepia(12%) saturate(934%) hue-rotate(167deg) brightness(93%) contrast(93%)' }} /* Approximate var(--ink) */
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
