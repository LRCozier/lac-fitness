import { getFeaturedTestimonials } from "@/app/utils/graphql-utils";
import TestimonialCard from "../ui/testimonialcard";

const TestimonialSection = async () => {
  const testimonials = await getFeaturedTestimonials();

  if (!testimonials.length) {
    return null;
  }

  return(
    <section className="section section-dark">
      <div className="container">
        <h2 className="section-title">
          Real Clients, Real Results
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonials) => (
            <TestimonialCard
            key={testimonials.id}
            testimonial={testimonials} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection;