import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Landing from './components/Landing';
import OurSolarSolution from './components/OurSolarSolution';
import Recommend from './components/Recommend';
import MarqueeSection from './components/MarqueeSection';
import FAQSection from './components/FAQSection';
import NewsSection from './components/NewsSection';
import IntroAccordion from './components/IntroAccordion';
import Footer from './components/Footer';
import LocationFooter from './components/LocationFooter';

// Pages
import Home from './pages/Home';
import Commercial from './pages/Commercial';
import HousingSociety from './pages/HousingSociety';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        {/* Landing Page Route */}
        <Route
          path="/"
          element={
            <>
              <Landing />
              <OurSolarSolution />
              <Recommend />
              <MarqueeSection />
              <FAQSection />
              <NewsSection />
              <IntroAccordion />
              <Footer />
              <LocationFooter />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/homes" element={<Home />} />
        <Route path="/commercial" element={<Commercial />} />
        <Route path="/housing-society" element={<HousingSociety />} />
        <Route path="/go-solar" element={<h1>CTA Page: Go Solar</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
