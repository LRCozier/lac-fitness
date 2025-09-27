export interface Post {
  id: number,
  title: string,
  excerpt: string;
  category: string;
  imageUrl: string;
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

export interface BlogCardProps {
  post: Post;
}

export interface TestimonialCardProps{
  testimonial: Testimonials;
}