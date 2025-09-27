import { getAllTestimonials } from '../utils/graphql-utils';
import TestimonialCard from '../components/ui/testimonialcard';

export default async function TestimonialsPage() {
  const testimonials = await getAllTestimonials();
  const categories = [...new Set(testimonials.map(t => t.category))];

  return (
    <div className="section animate-fade-in">
      <div className="container">
        <div className="text-center">
          <h1 className="page-title">Client Testimonials</h1>
          <p className="section-text">Hear from the people who've transformed their strength and performance.</p>
        </div>

        {testimonials.length > 0 ? (
          <>
            <div className="testimonial-categories">
              <button className="testimonial-category-btn active">All</button>
              {categories.map(category => (
                <button key={category} className="testimonial-category-btn">
                  {category}
                </button>
              ))}
            </div>

            <div className="testimonials-grid-full">
              {testimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-secondary">No testimonials available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
