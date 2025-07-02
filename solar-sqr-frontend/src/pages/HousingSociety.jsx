//Housing society page

import HousingHero from "../components/HousingSociety/HousingHero";
import WhyChooseUsSection from "../components/HousingSociety/WhyChooseUsSection";
import IndiaPresenceSection from "../components/HousingSociety/IndiaPresenceSection";
import CityProjectShowcase from "../components/HousingSociety/CityProjectShowcase";
import SolarSavingsSection from "../components/HousingSociety/SolarSavingsSection";
import GuideDownloadSection from "../components/HousingSociety/GuideDownloadSection";
import HousingSocietyHighlight from "../components/HousingSociety/HousingSocietyHighlight";
import CustomerTestimonials from "../components/HousingSociety/CustomerTestimonials";
import SafetySection from "../components/HousingSociety/SafetySection";
import HousingFAQSection from "../components/HousingSociety/HousingFAQSection";
import Header from "../components/Main/Header";
import NewsSection from "../components/Home/NewsSection";
import LocationFooter from "../components/Main/LocationFooter";
import Footer from "../components/Main/Footer";


const HousingSociety = () => {
    return (
      <>
        <Header/>
        <HousingHero/>
        <WhyChooseUsSection/>
        <IndiaPresenceSection/>
        <CityProjectShowcase/>
        <SolarSavingsSection/>
        <GuideDownloadSection/>
        <HousingSocietyHighlight/>
        <CustomerTestimonials/>
        <SafetySection/>
        <NewsSection/>
        <HousingFAQSection/>
        <Footer/>
        <LocationFooter/>
      </>
    );
  };
  
  export default HousingSociety;
  