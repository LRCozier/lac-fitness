import HeroSection from "../components/sections/herosection";
import SummarySection from "../components/sections/summary";


export default function Home() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <SummarySection />
    </div>
  );
}
