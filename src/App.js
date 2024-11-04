import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import AboutAndFAQs from './components/AboutAndFAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import WhatsAppButton from './components/WhatsAppButton';


function App() {
  return (
    <div className="text-gray-800">
      <SEO
        title="Cookie's Auto - Reliable Mobile Mechanic in Olney and Surrounding Areas"
        description="Cookie's Auto offers reliable mobile mechanic services in Olney, Milton Keynes, Newport Pagnell, Bedford, and surrounding areas. Contact us for car repairs, diagnostics, and more."
        keywords="mobile mechanic, Olney car repair, Milton Keynes auto service, Newport Pagnell mechanic, Bedford car diagnostics, car servicing Olney, mobile car repair"
        image={`${process.env.PUBLIC_URL}/assets/og-image.jpg`}
        url="https://cookiesauto.com"
      />

      <Hero />
      <Services />
      <Testimonials />
      <AboutAndFAQs />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;