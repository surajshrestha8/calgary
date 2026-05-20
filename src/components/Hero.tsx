'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const heroSlides = [
  { type: 'label', label: 'FBA label preview' },
  { type: 'image', label: 'Warehouse racking', src: '/hero/racking.jpg', alt: 'Warehouse racking with stocked pallets and boxes' },
  { type: 'image', label: 'Calgary warehouse exterior', src: '/hero/exterior.jpg', alt: 'Exterior loading docks at the Calgary warehouse' },
] as const;

const barcodeBars = Array.from({ length: 25 }, (_, index) => ({
  id: `barcode-${index}`,
  className: `block bg-paper h-full ${(index % 2 === 0) ? 'w-[2px]' : 'w-[1px] opacity-60'} ${(index % 3 === 0) ? 'h-3/4' : ''} ${(index % 5 === 0) ? 'w-[3px]' : ''}`,
}));

const labelRows = [
  { label: 'SHIP FROM', val: 'CALGARY, AB', hl: false },
  { label: 'SHIP TO', val: 'AMAZON FC Â· YYC1', hl: false },
  { label: 'UNITS', val: '248', hl: false },
  { label: 'STATUS', val: 'âœ“ INSPECTED', hl: true },
  { label: 'FNSKU', val: 'X00ABC123Q', hl: false },
] as const;

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(slideTimer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative pt-9 pb-14 sm:pt-9 sm:pb-18 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-[1.15fr_1fr] items-center gap-12 md:gap-15">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hero-text"
          >
            <span className="inline-flex items-center gap-2.5 font-mono text-[12px] tracking-[0.1em] text-ink-3 mb-7 px-3 py-1.5 border border-ink/10 rounded-full bg-white/50">
              <span className="size-1.5 rounded-full bg-amber"></span> CALGARY Â· ALBERTA Â· CANADA
            </span>
            <h1 className="font-narrow font-bold text-[clamp(48px,7vw,92px)] leading-[0.95] tracking-[-0.02em] uppercase mb-8">
              Your <span className="text-amber-deep italic relative inline-block after:content-[''] after:absolute after:bottom-2 after:left-[-4px] after:right-[-4px] after:h-1.5 after:bg-amber/30 after:-z-1">Amazon</span><br />
              prep partner<br />
              <span className="inline-block -rotate-2 bg-ink text-paper px-3 mx-1">in&nbsp;Calgary</span>
            </h1>
            <p className="text-[19px] leading-[1.55] text-ink-3 max-w-[540px] mb-9.5">
              We receive, inspect, label, bundle, and ship your inventory to Amazon FBA, FBM customers, and any e-commerce channel â€” so you can focus on growing the brand, not babysitting boxes.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3.5 mb-10 sm:mb-12">
              <a href="#contact" className="btn btn-amber group">Request a Quote <ArrowRight size={14} className="transition-transform group-hover:translate-x-[3px]" /></a>
              <a href="#services" className="btn btn-outline">View Services</a>
            </div>
            <div className="grid grid-cols-3 gap-4 sm:gap-9 pt-8 sm:pt-9 border-t border-ink/10">
              <div>
                <div className="font-narrow font-bold text-[30px] sm:text-[38px] leading-none text-ink">24h</div>
                <div className="font-mono text-[11px] tracking-[0.08em] text-ink-3 uppercase mt-1.5">Avg. Turnaround</div>
              </div>
              <div>
                <div className="font-narrow font-bold text-[30px] sm:text-[38px] leading-none text-ink">$0.65</div>
                <div className="font-mono text-[11px] tracking-[0.08em] text-ink-3 uppercase mt-1.5">Per Unit Prep*</div>
              </div>
              <div>
                <div className="font-narrow font-bold text-[30px] sm:text-[38px] leading-none text-ink">100%</div>
                <div className="font-mono text-[11px] tracking-[0.08em] text-ink-3 uppercase mt-1.5">Compliance Rate</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-3">
              {['Calgary based', 'Amazon-compliant prep', 'Western Canada shipping'].map((item) => (
                <span key={item} className="border border-ink/10 bg-white/50 px-3 py-1.5 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative aspect-[1/1.05]"
          >
            <AnimatePresence mode="wait">
              {heroSlides[activeSlide].type === 'label' ? (
                <motion.div
                  key="label-card"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="absolute inset-0 bg-ink text-paper p-7 rounded-[4px] shadow-lg overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(135deg,transparent_50%,rgba(255,106,19,0.15)_100%)] before:opacity-100 after:content-[''] after:absolute after:inset-0 after:bg-[repeating-linear-gradient(45deg,transparent_0_20px,rgba(255,255,255,0.02)_20px_21px)]"
                >
                  {/* Main Label Card */}
                  <div className="absolute top-6 left-7 size-[70px] border-2 border-amber rounded-full flex items-center justify-center text-center text-amber font-narrow font-bold text-[9px] leading-[1.1] uppercase -rotate-12 tracking-[0.05em] z-10">
                    FBA<br />READY<br />â˜…â˜…â˜…
                  </div>
                  <div className="absolute top-7 right-7 flex gap-[2px] items-end h-9">
                    {barcodeBars.map((bar) => (
                      <span key={bar.id} className={bar.className}></span>
                    ))}
                  </div>
                  <div className="absolute bottom-7 inset-x-7 flex flex-col gap-4.5 z-10">
                    {labelRows.map((row) => (
                      <div key={row.label} className="flex justify-between font-mono text-[11px] tracking-[0.08em] uppercase text-paper/55 border-b border-paper/12 pb-3">
                        <span>{row.label}</span>
                        <strong className={`font-medium ${row.hl ? 'text-amber' : 'text-paper'}`}>{row.val}</strong>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={heroSlides[activeSlide].src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-[4px] shadow-lg overflow-hidden bg-ink"
                >
                  <Image
                    src={heroSlides[activeSlide].src}
                    alt={heroSlides[activeSlide].alt}
                    fill
                    priority={activeSlide === 1}
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.32))]" />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-5 right-5 z-30 flex gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  aria-label={`Show ${slide.label}`}
                  aria-pressed={activeSlide === index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full border border-paper/80 transition-all ${
                    activeSlide === index ? 'w-7 bg-amber border-amber' : 'w-2.5 bg-paper/70 hover:bg-paper'
                  }`}
                />
              ))}
            </div>

            {/* Floating Card Qty */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-7.5 -left-7.5 w-[200px] bg-paper text-ink border-[1.5px] border-ink p-4.5 sm:p-5 rounded-[4px] -rotate-3 shadow-lg z-20"
            >
              <div className="font-narrow font-bold text-[30px] leading-none">3,420</div>
              <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-3 mt-1">Units processed today</div>
              <div className="mt-3 flex items-center gap-2 text-[12px] text-amber-deep font-semibold">
                <span className="size-2 rounded-full bg-amber"></span> All FBA-compliant
              </div>
            </motion.div>

            {/* Tape Tag */}
            <div className="absolute -top-5 -right-7.5 w-[240px] bg-amber text-ink py-4 px-5 rotate-4 rounded-[2px] shadow-lg z-20 before:absolute before:top-0 before:bottom-0 before:left-0 before:w-3 before:bg-[linear-gradient(90deg,transparent_50%,rgba(0,0,0,0.6)_50%)] before:bg-[size:4px_100%] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-3 after:bg-[linear-gradient(90deg,transparent_50%,rgba(0,0,0,0.6)_50%)] after:bg-[size:4px_100%]">
              <div className="font-narrow font-bold text-[11px] tracking-[0.18em] uppercase text-center">â˜… Handle With Care â˜…</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
