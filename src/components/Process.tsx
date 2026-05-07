'use client';

import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../constants';

export function Process() {
  return (
    <section className="bg-ink text-paper py-25 relative overflow-hidden" id="process">
      {/* Side text decoration */}
      <div className="absolute top-[30px] right-0 font-mono text-[11px] tracking-[0.2em] text-paper/20 rotate-180 [writing-mode:vertical-rl]">
        PROCESS / WORKFLOW / OPS
      </div>

      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-10 mb-15">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2.5 font-mono text-[12px] tracking-[0.1em] text-amber uppercase mb-4 before:content-[''] before:w-6 before:h-[1px] before:bg-amber">
              How It Works
            </span>
            <h2 className="font-narrow font-bold text-[clamp(36px,5vw,60px)] leading-none tracking-[-0.01em] uppercase text-paper">
              Simple <span className="italic text-amber-deep">workflow.</span><br />Zero headaches.
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[17px] text-paper/70 max-w-[620px] leading-[1.6]"
          >
            Onboarding takes minutes. Get up and running with us by the end of the week.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-15">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="border-t border-paper/12 pt-7 relative group"
            >
              <div className="font-narrow font-bold text-[60px] leading-none text-amber mb-4.5">
                {step.num}
              </div>
              <h4 className="font-narrow font-bold text-[20px] uppercase mb-3">
                {step.title}
              </h4>
              <p className="text-[14px] text-paper/70 leading-[1.55]">
                {step.desc}
              </p>
              {index < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-[-15px] text-amber text-[20px]">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
