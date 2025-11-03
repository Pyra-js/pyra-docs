import AnimatedBackground from "./AnimatedBackground";
import HeroSection from "./homepage/HeroSection";
import FeaturesSection from "./FeaturesSection";
import { WhyPyraSection } from "./homepage/WhyPyra";
import { QuickStartSection } from "./homepage/GetStarted";
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
        <WhyPyraSection />
        <QuickStartSection />
        <FeaturesSection />
        <CreatorSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;