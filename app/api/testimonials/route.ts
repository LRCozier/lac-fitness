import { getAllTestimonials } from '@/lib/server/hygraph';

export const revalidate = 3600;

export async function GET() {
  const testimonials = await getAllTestimonials();
  return Response.json(testimonials);
}