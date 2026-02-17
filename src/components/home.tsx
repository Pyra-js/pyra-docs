import AnimatedBackground from "./AnimatedBackground";
import HeroSection from "./homepage/HeroSection";
import FeaturesSection from "./homepage/FeaturesSection";
import PrinciplesSection from "./homepage/PrinciplesSection";
import DevExperienceSection from "./homepage/DevExperienceSection";
import ObservabilitySection from "./homepage/ObservabilitySection";
import RoutingRenderingSection from "./homepage/RoutingRenderingSection";
import ArchitectureSection from "./homepage/ArchitectureSection";
import { FinalCTASection } from "./homepage/GetStarted";
import CreatorSection from "./homepage/PyraTeam";
import Navbar from "./Nav";
import Footer from "./Footer";

function Home() {
  return (
    <div className="relative min-h-screen bg-[#0E0E12] overflow-hidden">
      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <FinalCTASection />
        <PrinciplesSection />
        <DevExperienceSection />
        <ObservabilitySection />
        <RoutingRenderingSection />
        <ArchitectureSection />
        <CreatorSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
