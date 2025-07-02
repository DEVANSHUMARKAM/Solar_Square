//On grid home page 

import OnGridIntroSection from "../components/Ongrid/OnGridIntroSection";
import OnGridFormSection from "../components/Ongrid/OnGridFormSection";
import Footer from "../components/Main/Footer";
import LocationFooter from "../components/Main/LocationFooter";
import Header from "../components/Main/Header";

const Ongridpage = () => {
  return (
    <>
      <Header/>
      <OnGridIntroSection />
      <OnGridFormSection/>

      <Footer/>
      <LocationFooter/>
    </>
  );
};

export default Ongridpage;