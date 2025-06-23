import HousingHero from "../components/HousingSociety/HousingHero";
import WhyChooseUsSection from "../components/HousingSociety/WhyChooseUsSection";
import IndiaPresenceSection from "../components/HousingSociety/IndiaPresenceSection";
import CityProjectShowcase from "../components/HousingSociety/CityProjectShowcase";

import LocationFooter from "../components/Main/LocationFooter";
import Footer from "../components/Main/Footer";


const HousingSociety = () => {
    return (
      <>
        <HousingHero/>
        <WhyChooseUsSection/>
        <IndiaPresenceSection/>
        <CityProjectShowcase/>

        <Footer/>
        <LocationFooter/>
      </>
    );
  };
  
  export default HousingSociety;
  