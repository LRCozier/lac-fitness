import HeroSection from '@/components/ui/sections/Herosection';
import TrustBar from '@/components/ui/Trustbar';
import SummarySection from '@/components/ui/sections/Summarysection';
import ServicesSection from '@/components/ui/sections/Servicessection';
import TestimonialsSection from '@/components/ui/sections/Testimonialsection';
import FaqPreview from '@/components/ui/sections/Faqpreview';
import CtaBand from '@/components/ui/sections/Ctaband';

import { getFeaturedTestimonials, getServices } from '@/lib/server/Hygraph';

export const revalidate = 3600;

export default async function HomePage() {
  const [services, testimonials] = await Promise.all([
    getServices(),
    getFeaturedTestimonials(),
  ]);

  return (
    <>
      <HeroSection />
      <TrustBar />
      <SummarySection />
      <ServicesSection services={services} />
      <PhilosophySection />
      <TestimonialsSection testimonials={testimonials} />
      <FaqPreview />
      <CtaBand />
    </>
  );
}
