import SplitHeader from '@/components/ui/Splitheader';
import TestimonialCard from '@/components/ui/cards/Testimonialcard';
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
        <SplitHeader
          headingId="testimonials-heading"
          eyebrow="What clients say"
          title={
            <>
              Real people.
              <br />
              Real results.
            </>
          }
          link={{ href: '/testimonials', label: 'Read more testimonials' }}
        >
          <div className="testimonial-grid testimonial-grid--split">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </SplitHeader>
      </div>
    </section>
  );
}