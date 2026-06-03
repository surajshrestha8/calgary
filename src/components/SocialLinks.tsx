import type { ComponentType } from 'react';
import { SOCIAL_LINKS } from '@/constants';

type SocialName = (typeof SOCIAL_LINKS)[number]['name'];

const icons: Record<SocialName, ComponentType<{ className?: string }>> = {
  Facebook: FacebookIcon,
  WhatsApp: WhatsAppIcon,
  TikTok: TikTokIcon,
};

const brandStyles: Partial<Record<SocialName, string>> = {
  Facebook: 'border-[#1877F2]/35 bg-[#1877F2]/12 text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white',
  TikTok: 'border-white/20 bg-black text-white hover:border-[#25F4EE] hover:bg-black hover:text-[#25F4EE]',
};

export function SocialLinks({ className = '' }: { className?: string }) {
  const visibleLinks = SOCIAL_LINKS.filter((link) => link.name !== 'WhatsApp' && link.href !== '#');

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {visibleLinks.map((link) => {
        const Icon = icons[link.name];

        return (
          <a
            key={link.name}
            href={link.href}
            aria-label={link.ariaLabel}
            title={link.name}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-10 w-10 items-center justify-center rounded-[4px] border transition-colors ${
              brandStyles[link.name] ?? 'border-paper/12 bg-paper/5 text-paper/70 hover:border-amber/50 hover:text-amber'
            }`}
          >
            <Icon className="size-5" />
          </a>
        );
      })}
    </div>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M13.8 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.6v3.2h2.8V21h3.4z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 3.2a8.7 8.7 0 0 0-7.5 13.1L3.4 20.8l4.6-1.1A8.7 8.7 0 1 0 12 3.2zm0 1.7a7 7 0 1 1 0 14 7 7 0 0 1-3.6-1l-.4-.2-2.3.6.6-2.2-.3-.4a7 7 0 0 1 6-10.8zm-3.1 3.9c-.2 0-.5.1-.7.3-.3.3-.9.8-.9 2s.9 2.3 1 2.5c.1.2 1.7 2.7 4.2 3.7 2.1.8 2.5.6 3 .6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3-1.7-.8c-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.7-.1-.3 0-.4.1-.5l.4-.5c.1-.1.2-.3.3-.4.1-.2 0-.3 0-.5L9.8 9c-.2-.2-.4-.2-.6-.2h-.3z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M15.6 3c.3 2.3 1.6 3.7 3.9 3.9v3.2a7 7 0 0 1-3.8-1.2v5.7c0 3.6-2.4 6.4-6.1 6.4a5.8 5.8 0 0 1-5.8-5.7c0-3.5 2.9-6.1 6.5-5.7V13a2.6 2.6 0 0 0-3.2 2.4 2.5 2.5 0 0 0 2.5 2.5c1.7 0 2.6-1.1 2.6-2.8V3h3.4z" />
    </svg>
  );
}
