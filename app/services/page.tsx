import type { Metadata } from 'next';
import ServiceTabs from '@/components/ui/Servicestabs';
import { getServices } from '@/lib/server/Hygraph';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Coaching tailored to your experience, confidence, and goals. 1-to-1 personal training, 2-to-1 small group sessions, and online coaching — for building strength and going the distance.',
};

export const revalidate = 3600;

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <section className="section">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Services</h1>
          <p className="page-subtitle">
            Coaching tailored to your experience, confidence, and goals — whether you're just 
            starting out, returning to training, or building toward a distance. In person in 
            Kingston, or online wherever you are.
          </p>
        </header>

        {services.length > 0 ? (
          <ServiceTabs services={services} />
        ) : (
          <div className="empty-state">
            <h3>No services available yet.</h3>
            <p>Please check back soon, or contact me directly with your questions.</p>
          </div>
        )}
      </div>
    </section>
  );
}