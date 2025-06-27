import OffGridIntroSection from "../components/Offgrid/OffGridIntroSection";
import OffGridFormSection from "../components/Offgrid/OffGridFormSection";
import Footer from "../components/Main/Footer";
import LocationFooter from "../components/Main/LocationFooter";
import Header from "../components/Main/Header";

const Offgridpage = () => {
  return (
    <>
      <Header/>
      <OffGridIntroSection />
      <OffGridFormSection/>

      <Footer/>
      <LocationFooter/>
    </>
  );
};

export default Offgridpage;