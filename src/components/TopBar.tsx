import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';

export function TopBar() {
  return (
    <div className="bg-ink text-paper font-mono text-[12px] tracking-[0.04em] py-2 border-b border-white/5">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-5.5">
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-amber shadow-[0_0_8px_var(--color-amber)] animate-pulse-custom"></span>
            NOW SHIPPING — CALGARY, AB
          </span>
          <span className="whitespace-nowrap">OPEN MON–SAT · 9 AM – 6 PM MT</span>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-5.5">
          <span className="flex items-center gap-1.5 whitespace-nowrap"><Phone size={12} /> (403) 555-0199</span>
          <span className="flex items-center gap-1.5 whitespace-nowrap"><Mail size={12} /> HELLO@CALGARYPREP.CA</span>
        </div>
      </div>
    </div>
  );
}
