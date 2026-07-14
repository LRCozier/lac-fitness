import { getServices } from '@/lib/server/Hygraph';

export const revalidate = 3600;

export async function GET() {
  const services = await getServices();
  return Response.json(services);
}