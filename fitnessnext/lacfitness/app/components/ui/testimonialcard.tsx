import { TestimonialCardProps } from "@/app/types";


const TestimonialCard = ({testimonial}: TestimonialCardProps) => {

  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">
        {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
      </div>
      <blockquote className="testimonial-text">"{testimonial.testimonialText}"</blockquote>
      <footer className="testimonial-author">- {testimonial.clientName}, {testimonial.location}</footer>
      <span className="testimonial-category">{testimonial.category}</span>
    </div>
  );
}

export default TestimonialCard;
