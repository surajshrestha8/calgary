import { ReactNode } from 'react';
import { Instagram, Facebook, Linkedin, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink-2 text-paper py-15 pb-7 border-t border-paper/6">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
          <div className="footer-brand">
            <a href="#" className="flex items-center gap-3 font-narrow font-extrabold text-[20px] uppercase tracking-[0.02em]">
              <div className="w-10 h-10 bg-ink text-amber flex items-center justify-center font-mono font-bold text-[14px] rounded-[4px] relative after:content-[''] after:absolute after:-top-[2px] after:-left-[2px] after:w-full after:h-full after:border after:border-amber after:rounded-[4px] after:pointer-events-none">
                CP
              </div>
              <div className="leading-tight">
                Calgary Prep Center
                <small className="block text-[9px] font-medium tracking-[0.18em] text-paper/50 mt-0.5 uppercase">3PL · FBA · FBM · STORAGE</small>
              </div>
            </a>
            <p className="text-paper/60 text-[14px] mt-4.5 leading-[1.6] max-w-[320px]">
              Calgary&apos;s trusted 3PL partner for Amazon sellers and e-commerce brands. Receiving, prep, storage, and fulfillment under one roof.
            </p>
          </div>

          <FooterCol title="Services">
            <ul>
              <li><a href="#services" className="text-paper/70 text-[14px] hover:text-amber transition-colors">FBA Prep</a></li>
              <li><a href="#services" className="text-paper/70 text-[14px] hover:text-amber transition-colors">FBM Fulfillment</a></li>
              <li><a href="#services" className="text-paper/70 text-[14px] hover:text-amber transition-colors">Storage</a></li>
              <li><a href="#services" className="text-paper/70 text-[14px] hover:text-amber transition-colors">Bundling</a></li>
              <li><a href="#services" className="text-paper/70 text-[14px] hover:text-amber transition-colors">Returns</a></li>
            </ul>
          </FooterCol>

          <FooterCol title="Company">
            <ul>
              <li><a href="#why" className="text-paper/70 text-[14px] hover:text-amber transition-colors">About Us</a></li>
              <li><a href="#process" className="text-paper/70 text-[14px] hover:text-amber transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-paper/70 text-[14px] hover:text-amber transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-paper/70 text-[14px] hover:text-amber transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-paper/70 text-[14px] hover:text-amber transition-colors">Contact</a></li>
            </ul>
          </FooterCol>

          <FooterCol title="Get In Touch">
            <ul className="flex flex-col gap-2.5">
              <li><a href="tel:+1 (825) 561-7356" className="text-paper/70 text-[14px] hover:text-amber transition-colors">+1 (825) 561-7356</a></li>
              <li><a href="mailto:info@calgaryprepexperts.com" className="text-paper/70 text-[14px] hover:text-amber transition-colors">info@calgaryprepexperts.com</a></li>
              <li className="text-paper/70 text-[14px]">401 33 St NE #3, Calgary, AB T2A 1X5 </li>
              <li className="text-paper/70 text-[14px]">Mon–Sat · 9–6 MT</li>
            </ul>
          </FooterCol>
        </div>

        <div className="border-t border-paper/8 pt-6 flex flex-wrap justify-between items-center gap-4 font-mono text-[11px] text-paper/40 tracking-[0.04em]">
          <div>© 2026 CALGARY PREP CENTER · ALL RIGHTS RESERVED</div>
          <div className="flex gap-3">
            {[Instagram, Facebook, MessageSquare, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 border border-paper/15 rounded-full flex items-center justify-center text-paper/60 hover:bg-amber hover:text-ink hover:border-amber transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div className="flex flex-col gap-4.5">
      <h5 className="font-narrow font-bold text-[13px] uppercase tracking-[0.1em] text-amber">{title}</h5>
      {children}
    </div>
  );
}
 
