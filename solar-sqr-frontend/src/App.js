import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Main/Header';
import Landing from './components/Main/Landing';
import OurSolarSolution from './components/Main/OurSolarSolution';
import Recommend from './components/Home/Recommend';
import MarqueeSection from './components/Home/MarqueeSection';
import FAQSection from './components/Home/FAQSection';
import NewsSection from './components/Home/NewsSection';
import IntroAccordion from './components/Main/IntroAccordion';
import Footer from './components/Main/Footer';
import LocationFooter from './components/Main/LocationFooter';

// Pages
import Home from './pages/Home';
import Commercial from './pages/Commercial';
import HousingSociety from './pages/HousingSociety';

function App() {
  return (
    <Router>
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
