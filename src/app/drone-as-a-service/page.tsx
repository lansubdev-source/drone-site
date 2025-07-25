// page.tsx
import HeroSection from './HeroSection';
import DroneExperienceSection from './DroneExperienceSection';
import DroneFeaturesSection from './DroneFeaturesSection';
import DroneCTASection from './DroneCTASection';
import DroneModelShowcaseSection from './DroneModelShowcaseSection';

export default function Page() {
  return (
    <main className="bg-white text-black">
      <HeroSection />
      <DroneModelShowcaseSection/>
      <DroneFeaturesSection />
      <DroneCTASection />
    </main>
  );
}
