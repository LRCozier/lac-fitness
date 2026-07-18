import type { Metadata } from 'next';
import TestimonialFilter from '@/components/ui/Testimonialfilter';
import { getAllTestimonials } from '@/lib/server/hygraph';

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description:
    'Hear from the people who have rebuilt their strength and confidence with L.A.C. Fitness in Kingston Upon Thames.',
};

export const revalidate = 3600;

export default async function TestimonialsPage() {
  const testimonials = await getAllTestimonials();

  return (
    <section className="section">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Client Testimonials</h1>
          <p className="page-subtitle">
            From people who have rebuilt their strength, and their confidence with it.
          </p>
        </header>

        {testimonials.length > 0 ? (
          <TestimonialFilter testimonials={testimonials} />
        ) : (
          <div className="empty-state">
            <h3>No testimonials available yet.</h3>
            <p>Check back soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}