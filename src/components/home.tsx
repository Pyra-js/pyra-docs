import AnimatedBackground from "./AnimatedBackground";
import HeroSection from "./homepage/HeroSection";
import FeaturesSection from "./FeaturesSection";
import { WhyPyraSection } from "./homepage/WhyPyra";
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
        <WhyPyraSection />
        <Footer />
      </div>
    </div>
  );
}

export default Home;