'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10 border-b border-ink/10 backdrop-blur-md bg-paper/92">
      <div className="container flex justify-between items-center py-4.5">
        <a href="#" className="flex items-center shrink-0 py-0.5">
          <img
            src="/logo/logo.jfif"
            alt="Calgary Prep Center"
            className="h-9 w-auto max-h-11 sm:h-10 md:h-11 max-w-[min(100%,260px)] object-contain object-left"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-8 list-none text-[14px] font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="relative transition-colors duration-200 hover:text-amber-deep group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber transition-[width] duration-250 ease-out group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#contact" className="btn btn-amber hidden sm:inline-flex group">
            Get a Quote <ArrowRight size={14} className="transition-transform group-hover:translate-x-[3px]" />
          </a>
          
          <button 
            className="lg:hidden flex flex-col gap-[5px] p-1.5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`block w-6 h-[2px] bg-ink transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-ink transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-[2px] bg-ink transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 z-20 bg-paper border-b border-ink/10 overflow-hidden shadow-lg"
          >
            <ul className="flex flex-col gap-4.5 p-6 font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="block text-ink hover:text-amber-deep"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                 <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-amber w-full justify-center">
                  Get a Quote <ArrowRight size={14} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
