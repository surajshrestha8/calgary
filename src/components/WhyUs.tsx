'use client';

import { motion } from 'motion/react';
import { WHY_US_POINTS } from '../constants';

export function WhyUs() {
  return (
    <section className="bg-paper-2 py-25" id="why">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.2fr] items-center gap-15">
          {/* Poster-style visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ink text-paper p-10 sm:p-12 rounded-[4px] relative overflow-hidden aspect-[4/5] flex flex-col justify-between"
          >
            {/* Grain & Grid effects in CSS */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,106,19,0.18),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0_30px,rgba(255,255,255,0.02)_30px_31px)]"></div>

            <div className="relative">
              <div className="font-mono text-[11px] tracking-[0.1em] text-paper/50 mb-6 flex justify-between">
                <span>FACILITY / YYC-01</span>
                <span className="text-amber flex items-center gap-1.5 before:w-2 before:h-2 before:bg-amber before:rounded-full before:animate-pulse">LIVE</span>
              </div>
              <h3 className="font-narrow font-bold text-[clamp(38px,4.5vw,58px)] leading-[0.95] uppercase">
                Built for <span className="text-amber italic">sellers,</span><br />run by <span className="text-amber italic">operators.</span>
              </h3>
            </div>

            <div className="relative flex justify-between items-end gap-5">
              <div className="w-[90px] h-[90px] border-2 border-amber rounded-full flex items-center justify-center text-center text-amber font-narrow font-bold text-[11px] leading-[1.1] uppercase -rotate-6">
                Calgary<br />Prep<br />Center
              </div>
              <div className="font-mono text-[10px] text-paper/50 text-right tracking-[0.05em]">
                51.0447 N<br />
                114.0719 W<br />
                ALBERTA / CA
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2.5 font-mono text-[12px] tracking-[0.1em] text-amber-deep uppercase mb-4 before:content-[''] before:w-6 before:h-[1px] before:bg-amber-deep">
              Why Calgary Prep Center
            </span>
            <h2 className="font-narrow font-bold text-[clamp(36px,5vw,60px)] leading-[1] tracking-[-0.01em] uppercase mb-6">
              Reliable. Fast.<br /><span className="text-amber-deep italic">Reasonable.</span>
            </h2>
            <p className="text-[17px] text-ink-3 max-w-[620px] leading-[1.6] mb-10">
              You&apos;re not just outsourcing labor. You&apos;re trusting us with margin, reviews, and your seller account.
            </p>

            <div className="flex flex-col gap-1">
              {WHY_US_POINTS.map((point, index) => (
                <div key={index} className="grid grid-cols-[80px_1fr] gap-6 py-6 border-b border-ink/10 first:border-t items-start">
                  <div className="font-mono text-[13px] text-amber-deep tracking-[0.05em] pt-1">
                    {point.num}
                  </div>
                  <div>
                    <h4 className="font-narrow font-bold text-[22px] uppercase mb-2 leading-[1.1]">
                      {point.title}
                    </h4>
                    <p className="text-ink-3 text-[15px] leading-[1.55]">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
