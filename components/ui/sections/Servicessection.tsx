import SplitHeader from '@/components/ui/Splitheader';
import ServiceCard from '@/components/ui/cards/Servicecard';
import type { Service } from '@/lib/types';

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="section" aria-labelledby="services-heading">
      <div className="container">
        <SplitHeader
          headingId="services-heading"
          eyebrow="Coaching tailored to you"
          title={
            <>
              Find the coaching
              <br />
              that fits your goals.
            </>
          }
          link={{ href: '/services', label: 'View all services' }}
        >
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </SplitHeader>
      </div>
    </section>
  );
}