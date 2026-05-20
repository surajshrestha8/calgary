'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { FAQS } from '../constants';

type FAQEntry = (typeof FAQS)[number];

export function FAQ() {
  return (
    <section className="bg-paper-2 py-25" id="faq">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-15 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2.5 font-mono text-[12px] tracking-[0.1em] text-ink uppercase mb-4 before:content-[''] before:w-6 before:h-[1px] before:bg-ink">
              FAQ
            </span>
            <h2 className="font-narrow font-bold text-[clamp(36px,5vw,60px)] text-[48px] leading-[1] tracking-[-0.01em] uppercase mb-5">
              Questions,<br /><span className="text-amber-deep italic">answered.</span>
            </h2>
            <p className="text-[17px] text-ink-3 max-w-[620px] leading-[1.6]">
              Don&apos;t see what you&apos;re looking for? Drop us a message - we usually reply same day.
            </p>
          </motion.div>
 
          <div className="flex flex-col">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} isFirst={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 
function FAQItem({ faq, isFirst }: { faq: FAQEntry; isFirst: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-ink/10 ${isFirst ? 'border-t' : ''}`}>
      <button 
        className="w-full bg-none shadow-none text-left py-6 font-narrow font-bold text-[18px] uppercase text-ink cursor-pointer flex justify-between items-center gap-5 tracking-[0.01em]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {faq.q}
        <div className={`w-7 h-7 border-[1.5px] border-ink rounded-full flex items-center justify-center shrink-0 text-[16px] transition-all duration-300 ${isOpen ? 'bg-amber border-amber rotate-45' : ''}`}>
          <Plus size={16} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="text-ink-3 text-[15px] leading-[1.65] pb-6">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
