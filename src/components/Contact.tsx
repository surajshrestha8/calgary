'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send your request.');
      }

      setStatus('success');
      setStatusMessage(data.message);
      form.reset();
    } catch (error) {
      setStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'Unable to send your request.');
    }
  };

  return (
    <section className="bg-ink text-paper py-18 sm:py-25 relative overflow-hidden" id="contact">
      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(255,106,19,0.12),transparent_40%),radial-gradient(circle_at_100%_0%,rgba(255,106,19,0.08),transparent_40%)] pointer-events-none"></div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 relative">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2.5 font-mono text-[12px] tracking-[0.1em] text-amber uppercase mb-4 before:content-[''] before:w-6 before:h-[1px] before:bg-amber">
              Get In Touch
            </span>
            <h2 className="font-narrow font-bold text-[clamp(36px,5vw,60px)] leading-[1] tracking-[-0.01em] uppercase mb-5">
              Let&apos;s prep<br />your <span className="text-amber italic">next shipment.</span>
            </h2>
            <p className="text-[17px] text-paper/70 max-w-[620px] leading-[1.6] mb-10">
              Tell us about your product and volume. We&apos;ll send a tailored quote within one business day - usually a lot faster.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4.5 mt-10">
              <ContactRow 
                icon={<MapPin size={18} />} 
                label="Warehouse" 
                value="401 33 St NE #3, Calgary, AB T2A 1X5"
              />
              <ContactRow 
                icon={<Phone size={18} />} 
                label="Phone" 
                value="+1 (825) 561-7356" 
                href="tel:+1 (825) 561-7356"
              />
              <ContactRow 
                icon={<Mail size={18} />} 
                label="Email" 
                value="info@calgaryprepexperts.com" 
                href="mailto:info@calgaryprepexperts.com"
              />
              <ContactRow 
                icon={<Clock size={18} />} 
                label="Hours" 
                value="Mon-Sat / 9 AM - 6 PM MT" 
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-paper/5 border border-paper/12 p-6 sm:p-10 rounded-[4px] backdrop-blur-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-7">
              <div>
                <div className="font-narrow font-bold text-[26px] uppercase mb-2">Request a Quote</div>
                <div className="text-[14px] text-paper/60 font-mono tracking-[0.04em]">
                  {'// REPLY WITHIN 1 BUSINESS DAY'}
                </div>
              </div>
              <div className="inline-flex items-center gap-2 self-start rounded-[4px] border border-paper/12 bg-paper/5 px-3 py-2 text-[12px] text-paper/75">
                <ShieldCheck size={15} className="text-amber" />
                Private intake
              </div>
            </div>

            <form className="flex flex-col gap-4.5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="companyWebsite"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <FormGroup label="First Name" name="firstName" placeholder="Jane" required />
                <FormGroup label="Last Name" name="lastName" placeholder="Doe" required />
              </div>
              <FormGroup label="Email Address" name="email" type="email" placeholder="you@brand.com" required />
              <FormGroup label="Phone (Optional)" name="phone" placeholder="(___) ___-____" />
              
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="font-mono text-[11px] tracking-[0.1em] text-paper/60 uppercase">What do you need?</label>
                <select id="service" name="service" required className="bg-transparent border-b border-paper/20 py-2.5 text-[16px] sm:text-[15px] focus:border-amber cursor-pointer">
                  <option className="bg-ink">Amazon FBA Prep</option>
                  <option className="bg-ink">FBM Fulfillment</option>
                  <option className="bg-ink">Storage Only</option>
                  <option className="bg-ink">Bundling / Kitting</option>
                  <option className="bg-ink">Returns Processing</option>
                  <option className="bg-ink">Multiple Services</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="monthlyUnits" className="font-mono text-[11px] tracking-[0.1em] text-paper/60 uppercase">Estimated Monthly Units</label>
                <select id="monthlyUnits" name="monthlyUnits" required className="bg-transparent border-b border-paper/20 py-2.5 text-[16px] sm:text-[15px] focus:border-amber cursor-pointer">
                  <option className="bg-ink">Less than 500</option>
                  <option className="bg-ink">500 - 2,000</option>
                  <option className="bg-ink">2,000 - 10,000</option>
                  <option className="bg-ink">10,000+</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-mono text-[11px] tracking-[0.1em] text-paper/60 uppercase">Tell us about your product</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  className="bg-transparent border-b border-paper/20 py-2.5 text-[16px] sm:text-[15px] focus:border-amber resize-y min-h-[80px]"
                  placeholder="Product type, dimensions, special handling needs..."
                ></textarea>
              </div>

              {statusMessage && (
                <div
                  className={`rounded-[4px] border px-3 py-2 text-[13px] leading-[1.5] ${
                    status === 'success' ? 'border-amber/40 bg-amber/10 text-amber' : 'border-paper/15 bg-paper/5 text-paper/85'
                  }`}
                  role={status === 'error' ? 'alert' : 'status'}
                >
                  {statusMessage}
                </div>
              )}

              <button type="submit" disabled={status === 'sending'} className="btn btn-amber mt-3 w-full justify-center group uppercase tracking-[0.08em] font-bold disabled:cursor-not-allowed disabled:opacity-70">
                {status === 'sending' ? 'Sending...' : 'Send Request'} <ArrowRight size={14} className="transition-transform group-hover:translate-x-[3px]" />
              </button>
              <p className="text-center text-[12px] leading-[1.5] text-paper/50">
                Your details are only used to prepare your quote. No mailing list, no resale.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: ReactNode, label: string, value: string, href?: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 bg-paper/5 border border-paper/12 rounded-[4px] flex items-center justify-center text-amber shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-mono text-[11px] text-paper/50 tracking-[0.08em] uppercase mb-0.5">{label}</div>
        {href ? (
          <a href={href} className="text-paper font-medium hover:text-amber transition-colors">{value}</a>
        ) : (
          <div className="text-paper font-medium">{value}</div>
        )}
      </div>
    </div>
  );
}

function FormGroup({ label, name, type = "text", placeholder, required = false }: { label: string, name: string, type?: string, placeholder: string, required?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-[11px] tracking-[0.1em] text-paper/60 uppercase">{label}</label>
      <input 
        id={name}
        name={name}
        type={type} 
        placeholder={placeholder}
        required={required}
        className="bg-transparent border-b border-paper/20 py-2.5 text-[16px] sm:text-[15px] focus:border-amber transition-colors"
      />
    </div>
  );
}
