import OnGridIntroSection from "../components/Ongrid/OnGridIntroSection";
import OnGridFormSection from "../components/Ongrid/OnGridFormSection";
import Footer from "../components/Main/Footer";
import LocationFooter from "../components/Main/LocationFooter";

const Ongridpage = () => {
  return (
    <>
      <OnGridIntroSection />
      <OnGridFormSection/>

      <Footer/>
      <LocationFooter/>
    </>
  );
};

export default Ongridpage;