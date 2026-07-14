import { getAllTestimonials } from '@/lib/server/Hygraph';

export const revalidate = 3600;

export async function GET() {
  const testimonials = await getAllTestimonials();
  return Response.json(testimonials);
}