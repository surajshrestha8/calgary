'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SERVICES } from '../constants';

export function Services() {
  return (
    <section className="bg-paper py-25" id="services">
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
            From the moment your shipment arrives at our Calgary warehouse to the second it lands in an Amazon fulfillment center — we handle every step.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-paper group relative min-h-[390px] cursor-pointer overflow-hidden transition-all duration-300"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-[0.18] grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-[0.22] group-hover:grayscale-0"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-paper/95 via-paper/90 to-paper/98 transition-opacity duration-300 group-hover:opacity-0"></div>
              <div className="absolute top-0 left-0 w-full h-0 bg-ink/94 transition-all duration-350 ease-out group-hover:h-full"></div>

              <div className="relative z-10 flex min-h-[390px] transition-colors duration-300 group-hover:text-paper">
                <div className="flex flex-col justify-end p-7 sm:p-9.5">
                  <div className="w-14 h-14 bg-ink text-amber flex items-center justify-center mb-6 rounded-[4px] transition-all duration-300 group-hover:bg-amber group-hover:text-ink">
                    {service.icon}
                  </div>
                  <h3 className="font-narrow font-bold text-[24px] uppercase mb-3 text-ink transition-colors duration-300 group-hover:text-paper leading-[1.05]">
                    {service.name}
                  </h3>
                  <p className="text-[15px] text-ink-3 mb-6 leading-[1.55] transition-colors duration-300 group-hover:text-paper/80">
                    {service.desc}
                  </p>
                  <span className="font-narrow font-bold text-[12px] uppercase tracking-[0.08em] text-amber-deep inline-flex items-center gap-1.5 transition-colors duration-300 group-hover:text-amber">
                    Learn More →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
