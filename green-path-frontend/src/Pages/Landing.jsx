import React from 'react';
import Hero from '../components/landing/hero';
import Features from '../components/landing/Features';
import Stats from '../components/landing/Stats';
import CTA from '../components/landing/CTA';
import FooterCTA from '../components/landing/FooterCTA';
import ExploreDataSection from '../components/landing/LucknowLocal';
import Footer from '../components/Footer';
function LandingPage() {
    return (
        <div className='bg-[#f7f2f2] min-h-screen'>
          <Hero/>
          <Features/>
          <Stats/>
          <CTA/>
          <FooterCTA/>
          <ExploreDataSection />
          <Footer />
        </div>
    );
}

export default LandingPage;