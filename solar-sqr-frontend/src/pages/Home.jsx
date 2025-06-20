import React from 'react';
import HomeBannerSlider from '../components/HomeBannerSlider';
import ConsultationSection from '../components/ConsultationSection';
import NewsSection from '../components/NewsSection';
import WhyChooseSolar from '../components/WhyChooseSolar';
import Recommend from '../components/Recommend'
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import LocationFooter from '../components/LocationFooter';

const HomePage = () => {
  return (
    <>
      <HomeBannerSlider />
      <ConsultationSection />
      <NewsSection />
      <WhyChooseSolar />

      <Recommend />
      <FAQSection />
      <Footer />
      <LocationFooter />

    </>
  );
};

export default HomePage;
