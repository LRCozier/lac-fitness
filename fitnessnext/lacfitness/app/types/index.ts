export interface Post {
  id: number,
  title: string,
  excerpt: string;
  category: string;
  content: string;
  slug: string;
  publishedAt: string;
}

export interface Testimonials {
  id: string;
  clientName: string;
  location: string;
  testimonialText: string;
  rating: number;
  category: string;
  featured: boolean;
  createdAt: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  duration?: string;
  intensity?: string;
  recommendedFor?: string[];
}

export interface BlogCardProps {
  post: Post;
}

export interface TestimonialCardProps{
  testimonial: Testimonials;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  services?: string;
}