/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { AboutSection } from './components/AboutSection';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { Footer } from './components/Footer';
import { PageLoadSequence } from './components/PageLoadSequence';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <div className="bg-[#020408] min-h-screen text-white font-sans selection:bg-blue-500/30">
      <CustomCursor />
      <PageLoadSequence>
        <Navbar />
        <Hero />
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
        <AboutSection />
        <WhatsAppCTA />
        <Footer />
      </PageLoadSequence>
    </div>
  );
}
