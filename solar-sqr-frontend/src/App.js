import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
// import HoverSplitGallery from './components/HoverSplitGallery';
import OurSolarSolution from './components/OurSolarSolution';
import TestimonialSection from './components/TestimonialSection';
import MarqueeSection from './components/MarqueeSection';
import FAQSection from './components/FAQSection';
import NewsSection from './components/NewsSection';
import IntroAccordion from './components/IntroAccordion';
import Footer from './components/Footer';
// import LocationFooter from './components/LocationFooter';

// Pages (route components)
import Home from './pages/Home';
import Commercial from './pages/Commercial';
import HousingSociety from './pages/HousingSociety';

function App() {
  return (
    <Router>
      <Header />
      <HeroSection />
      <OurSolarSolution />
      <TestimonialSection />
      <MarqueeSection />
      <FAQSection />
      <NewsSection />
      <IntroAccordion />
      <Footer />
      {/* <LocationFooter /> */}
      {/* <HoverSplitGallery />  */}

      <Routes>
        <Route path="/homes" element={<Home />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/housing-society" element={<HousingSociety />} />
        <Route path="/go-solar" element={<h1>CTA Page: Go Solar</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
