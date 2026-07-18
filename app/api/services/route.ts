import { getServices } from '@/lib/server/hygraph';

export const revalidate = 3600;

export async function GET() {
  const services = await getServices();
  return Response.json(services);
}