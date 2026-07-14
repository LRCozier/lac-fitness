import type { Metadata } from 'next';
import ServiceTabs from '@/components/ui/Servicestabs';
import { getServices } from '@/lib/server/Hygraph';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Strength coaching tailored to your experience, confidence, and goals. 1-to-1 personal training, 2-to-1 group sessions, and online programming.',
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
            No-nonsense strength coaching tailored to your experience, confidence, and
            goals &mdash; whether you&rsquo;re just starting, returning to training, or
            levelling up.
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