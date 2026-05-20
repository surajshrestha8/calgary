'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SERVICES } from '../constants';

export function Services() {
  return (
    <section className="bg-paper pt-14 pb-25 sm:pt-16" id="services">
      <div className="container">
        <div className="flex flex-wrap justify-between items-end gap-10 mb-15">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2.5 font-mono text-[12px] tracking-[0.1em] text-amber-deep uppercase mb-4 before:content-[''] before:w-6 before:h-[1px] before:bg-amber-deep">
              What We Do
            </span>
            <h2 className="font-narrow font-bold text-[clamp(36px,5vw,60px)] leading-none tracking-[-0.01em] uppercase">
              Full-service <span className="text-amber-deep italic">3PL prep</span><br />under one roof.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[17px] text-ink-3 max-w-[620px] leading-[1.6]"
          >
            From the moment your shipment arrives at our Calgary warehouse to the second it lands in an Amazon fulfillment center - we handle every step.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-paper border border-ink/10 rounded-[4px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-xl hover:shadow-ink/8"
            >
              <div className="relative aspect-[16/10] bg-ink overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 h-1 bg-amber scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
              </div>

              <div className="flex min-h-[245px] flex-col p-6 sm:p-7">
                  <div className="mb-5 flex size-13 items-center justify-center rounded-[4px] bg-ink text-paper transition-colors duration-300 group-hover:bg-amber group-hover:text-ink">
                    {service.icon}
                  </div>
                  <h3 className="font-narrow font-bold text-[24px] uppercase mb-3 text-ink leading-[1.05]">
                    {service.name}
                  </h3>
                  <p className="text-[15px] text-ink-3 mb-6 leading-[1.55]">
                    {service.desc}
                  </p>
                  <span className="mt-auto font-narrow font-bold text-[12px] uppercase tracking-[0.08em] text-amber-deep inline-flex items-center gap-1.5">
                    Learn More -&gt;
                  </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
