import React from 'react';
import HomeBannerSlider from '../components/Home/HomeBannerSlider';
import ConsultationSection from '../components/Home/ConsultationSection';
import NewsSection from '../components/Home/NewsSection';
import WhyChooseSolar from '../components/Home/WhyChooseSolar';
import Recommend from '../components/Home/Recommend'
import FAQSection from '../components/Home/FAQSection';
import Footer from '../components/Main/Footer';
import LocationFooter from '../components/Main/LocationFooter';
import SolarLocations from '../components/Home/SolarLocations';
import GuideBookSection from '../components/Home/GuideBookSection';
import WhoWeAreSection from '../components/Home/WhoWeAreSection';
import ParallaxSection from '../components/Home/ParallaxSection';
import MarqueeSection from '../components/Home/MarqueeSection';
import SolarSwitchTimeline from '../components/Home/SolarSwitchTimeline';


const HomePage = () => {
  return (
    <>
      {/* <Header/> */}
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
