import HousingHero from "../components/HousingSociety/HousingHero";
import WhyChooseUsSection from "../components/HousingSociety/WhyChooseUsSection";
import IndiaPresenceSection from "../components/HousingSociety/IndiaPresenceSection";
import CityProjectShowcase from "../components/HousingSociety/CityProjectShowcase";
import SolarSavingsSection from "../components/HousingSociety/SolarSavingsSection";

import LocationFooter from "../components/Main/LocationFooter";
import Footer from "../components/Main/Footer";


const HousingSociety = () => {
    return (
      <>
        <HousingHero/>
        <WhyChooseUsSection/>
        <IndiaPresenceSection/>
        <CityProjectShowcase/>
        <SolarSavingsSection/>

        <Footer/>
        <LocationFooter/>
      </>
    );
  };
  
  export default HousingSociety;
  