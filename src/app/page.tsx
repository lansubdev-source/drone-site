import HeroSection from "@/components/HeroSection";
import FeatureVideoSection from "@/components/FeatureVideoSection";
import SolutionPage from "@/components/SolutionPage";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactPage from "./contact/page";
import DroneFleet from "@/components/DroneFleet";
import ImpactAreas from "@/components/ImpactAreas";
import AchievementsSection from "@/components/AchievementSection";
import LatestBlogs from "@/components/LatestBlogs";
import SnapshotsSection from "@/components/SnapshotsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SolutionPage/>
      <DroneFleet/>
      <ImpactAreas/>
      <AchievementsSection/>
      <LatestBlogs/>
      <SnapshotsSection/>
    </main>
  );
}