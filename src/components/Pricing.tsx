import { motion } from 'motion/react';
import { PRICING_PLANS } from '../constants';

export function Pricing() {
  return (
    <section className="bg-paper py-25" id="pricing">
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-10 mb-15">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2.5 font-mono text-[12px] tracking-[0.1em] text-amber-deep uppercase mb-4 before:content-[''] before:w-6 before:h-[1px] before:bg-amber-deep">
              Pricing
            </span>
            <h2 className="font-narrow font-bold text-[clamp(36px,5vw,60px)] leading-[1] tracking-[-0.01em] uppercase">
              Honest rates.<br /><span className="text-amber-deep italic">No nonsense.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[17px] text-ink-3 max-w-[620px] leading-[1.6]"
          >
            Pay per unit, per pallet, per service. No setup fees. No minimums. Volume discounts available — let's chat.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-15">
          {PRICING_PLANS.map((plan: any, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6 }}
              className={`p-8 sm:p-10 rounded-[4px] relative border-[1.5px] border-ink ${plan.featured ? 'bg-ink text-paper' : 'bg-paper-2 text-ink'}`}
            >
              {plan.tag && (
                <div className="absolute -top-3.5 right-6 bg-amber text-ink font-mono text-[11px] font-bold tracking-[0.1em] py-1.5 px-3 uppercase rounded-[2px]">
                  {plan.tag}
                </div>
              )}
              <div className="font-narrow font-bold text-[22px] uppercase mb-2">
                {plan.name}
              </div>
              <p className={`text-[14px] mb-7 ${plan.featured ? 'text-paper' : 'text-ink-3'}`}>
                {plan.desc}
              </p>
              <div className={`font-narrow font-bold text-[56px] leading-none flex items-baseline gap-1.5 ${plan.featured ? 'text-amber' : 'text-ink'}`}>
                <sup className="text-[24px] font-semibold">$</sup>{plan.price}
              </div>
              <div className={`font-mono text-[12px] mt-2 mb-8 tracking-[0.04em] ${plan.featured ? 'text-paper/60' : 'text-ink-3'}`}>
                {plan.period}
              </div>
              <ul className="list-none mb-8">
                {plan.features.map((feat: any, j: number) => (
                  <li key={j} className={`py-2.5 pl-6 border-b border-ink/10 relative text-[14px] last:border-none ${plan.featured ? 'text-paper/85' : ''}`}>
                    <span className={`absolute left-0 top-4.5 w-3 h-[2px] ${plan.featured ? 'bg-amber' : 'bg-amber-deep'}`}></span>
                    {feat}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn w-full justify-center ${plan.featured ? 'bg-amber text-ink hover:bg-paper' : 'btn-outline'}`}>
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-8 font-mono text-[14px] text-ink-3 tracking-[0.04em]">
          // FBM, BUNDLING, KITTING & RETURNS PRICED PER PROJECT — REQUEST A QUOTE
        </p>
      </div>
    </section>
  );
}
