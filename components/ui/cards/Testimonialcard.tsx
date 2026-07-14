import { Star } from 'lucide-react';
import type { Testimonial } from '@/lib/types';

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const rating = Math.max(0, Math.min(5, Math.round(testimonial.rating)));

  return (
    <article className="testimonial-card">
      <header className="testimonial-header">
        <span className="testimonial-avatar" aria-hidden="true">
          {initials(testimonial.clientName)}
        </span>

        <div className="testimonial-identity">
          <p className="testimonial-name">{testimonial.clientName}</p>
          <p className="testimonial-location">{testimonial.location}</p>
        </div>
      </header>

      <blockquote className="testimonial-text">
        {testimonial.testimonialText}
      </blockquote>

      <footer className="testimonial-footer">
        <span
          className="testimonial-rating"
          role="img"
          aria-label={`Rated ${rating} out of 5`}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              className={
                index < rating
                  ? 'testimonial-star testimonial-star--filled'
                  : 'testimonial-star'
              }
              aria-hidden="true"
            />
          ))}
        </span>

        {testimonial.metric && (
          <span className="testimonial-metric">{testimonial.metric}</span>
        )}
      </footer>
    </article>
  );
}