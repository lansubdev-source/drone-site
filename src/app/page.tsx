import HeroSection from "@/components/HeroSection";
import AlternatingFeatures from "@/components/AlternatingFeatures";
import FeatureVideoSection from "@/components/FeatureVideoSection";
import SolutionPage from "@/components/SolutionPage";
import WhyChooseUs from "@/components/WhyChooseUs";
import DroneAsAService from "@/components/DroneAsAService";
import RPTOPage from "@/components/RPTO";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolutionPage/>
      <AlternatingFeatures/>
      <DroneAsAService/>
      <RPTOPage/>
      <WhyChooseUs/>
      <ContactPage/>
    </main>
  );
}