import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';

// Pages (route components)
import Home from './pages/Home';
import Commercial from './pages/Commercial';
import HousingSociety from './pages/HousingSociety';

function App() {
  return (
    <Router>
      <Header />
      <HeroSection />
      <ServicesSection />

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
