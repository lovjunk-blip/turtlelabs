import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import LivePreviewSection from "@/components/LivePreviewSection";
import ScoreOutputSection from "@/components/ScoreOutputSection";
import ArchetypeGrid from "@/components/ArchetypeGrid";
import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <LivePreviewSection />
      <ScoreOutputSection />
      <ArchetypeGrid />
      <SocialProofSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
