import type { Metadata } from 'next';
import { TopBar } from '@/components/TopBar';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { WhyUs } from '@/components/WhyUs';
import { Platforms } from '@/components/Platforms';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Chat } from '@/components/Chat';

export const metadata: Metadata = {
  title: 'Amazon FBA Prep, FBM Fulfillment & 3PL Storage in Calgary',
  description:
    'Calgary Prep Center receives, labels, bundles, stores, and ships inventory for Amazon FBA, FBM, Shopify, Walmart, TikTok Shop, Etsy, and eBay sellers.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-[100]">
        <TopBar />
        <Navbar />
        <Marquee />
      </div>
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <Platforms />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Chat />
    </div>
  );
}
