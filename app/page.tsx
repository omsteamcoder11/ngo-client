import CTASection from "../components/home/CTASection";
import HeroSection from "../components/home/HeroSection";
// import HowItWorks from "../components/home/HowItWorks";
import ChangeLife from "../components/home/ChangeLife";
import MissionSection from "../components/home/MissionSection";
import HomeImpact from "../components/home/HomeImpact";
import KidsSection from "../components/home/KidsSection";
import FeaturedSection from "../components/home/FeaturedSection";
import Home from "../components/home/Home";

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(220,252,231,0.95),_rgba(255,255,255,1)_45%,_rgba(236,253,245,0.9)_100%)] text-emerald-950">

      <HeroSection />
      <MissionSection />
      <HomeImpact />
      <Home />
      <KidsSection />
      <FeaturedSection />
      <ChangeLife />
      {/* <HowItWorks /> */}
      <CTASection />

    </div>
  );
}



