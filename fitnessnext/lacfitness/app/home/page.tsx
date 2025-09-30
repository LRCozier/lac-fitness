import HeroSection from "../components/sections/herosection";
import SummarySection from "../components/sections/summary";
import TestimonialsSection from "../components/sections/testimonialsection";


export default function Home() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <SummarySection />
      <TestimonialsSection />
    </div>
  );
}
