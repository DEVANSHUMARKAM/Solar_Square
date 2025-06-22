import CommercialHero from "../components/CommercialHero";
import TestimonialSection from "../components/TestimonialSection";
import FormCommercial from "../components/Formcommercial";
import InstallationExperience from "../components/InstallationExperience";
import CommercialStatsSection from "../components/CommercialStatsSection";
import CustomerReviewSection from "../components/CustomerReviewSection";
import Footer from "../components/Footer";
import LocationFooter from "../components/LocationFooter";
import Header from "../components/Header";

const Commercial = () => {
  return (
    <>
      <Header/>
      <CommercialHero />
      <TestimonialSection />
      <FormCommercial />
      <InstallationExperience />
      <CommercialStatsSection />
      < CustomerReviewSection/>

      < Footer />
      < LocationFooter />

    </>
  );
};

export default Commercial;
  