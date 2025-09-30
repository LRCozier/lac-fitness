import { getFeaturedTestimonials } from '@/app/utils/graphql-utils';
import TestimonialCard from '../ui/testimonialcard';

const TestimonialsSection = async () => {
  const testimonials = await getFeaturedTestimonials();

  if (!testimonials.length) return null;

  return (
    <section className="section section-dark">
      <div className="container">
        <h2 className="section-title text-center">REAL CLIENTS, REAL RESULTS</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;