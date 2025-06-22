import React from 'react';
import HomeBannerSlider from '../components/HomeBannerSlider';
import ConsultationSection from '../components/ConsultationSection';
import NewsSection from '../components/NewsSection';
import WhyChooseSolar from '../components/WhyChooseSolar';
import Recommend from '../components/Recommend'
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import LocationFooter from '../components/LocationFooter';
import SolarLocations from '../components/SolarLocations';
import GuideBookSection from '../components/GuideBookSection';
import WhoWeAreSection from '../components/WhoWeAreSection';
import ParallaxSection from '../components/ParallaxSection';
import MarqueeSection from '../components/MarqueeSection';
import SolarSwitchTimeline from '../components/SolarSwitchTimeline';
import Header from '../components/Header';
const HomePage = () => {
  return (
    <>
      <Header/>
      <HomeBannerSlider />
      <ConsultationSection />
      <NewsSection />
      <WhyChooseSolar />
      <SolarLocations />
      <GuideBookSection />
      <WhoWeAreSection/>
      <ParallaxSection />
      <MarqueeSection />
      <SolarSwitchTimeline />


      <Recommend />
      <FAQSection />
      <Footer />
      <LocationFooter />

    </>
  );
};

export default HomePage;
