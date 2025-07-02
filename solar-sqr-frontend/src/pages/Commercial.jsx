import CommercialHero from "../components/Commercial/CommercialHero";
import TestimonialSection from "../components/Commercial/TestimonialSection";
import FormCommercial from "../components/Commercial/Formcommercial";
import InstallationExperience from "../components/Commercial/InstallationExperience";
import CommercialStatsSection from "../components/Commercial/CommercialStatsSection";
import CustomerReviewSection from "../components/Main/CustomerReviewSection";
import Footer from "../components/Main/Footer";
import LocationFooter from "../components/Main/LocationFooter";
import Header from "../components/Main/Header";

const Commercial = () => {
  return (
    <>
      <Header/>
      <CommercialHero />
      <TestimonialSection />
      <FormCommercial />
      <InstallationExperience />
      <CommercialStatsSection />
      <CustomerReviewSection/>

      < Footer />
      < LocationFooter />

    </>
  );
};

export default Commercial;
  