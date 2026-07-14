import TestimonialCard from '@/components/ui/cards/Testimonialcard';
import BaseButton from '@/components/ui/Basebutton';
import type { Testimonial } from '@/lib/types';

export default function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  if (!testimonials.length) return null;

  return (
    <section className="section section--alt" aria-labelledby="testimonials-heading">
      <div className="container">
        <p className="section-eyebrow">In their words</p>
        <h2 id="testimonials-heading" className="section-title">
          Testimonials
        </h2>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="section-actions">
          <BaseButton to="/testimonials" variant="secondary">
            Read more testimonials
          </BaseButton>
        </div>
      </div>
    </section>
  );
}