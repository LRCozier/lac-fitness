import ServiceCard from '@/components/ui/cards/Servicecard';
import BaseButton from '@/components/ui/Basebutton';
import type { Service } from '@/lib/types';

export default function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="section section--alt" aria-labelledby="services-heading">
      <div className="container">
        <p className="section-eyebrow">What I offer</p>
        <h2 id="services-heading" className="section-title">
          Coaching Services
        </h2>

        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="section-actions">
          <BaseButton to="/services" variant="secondary">
            Compare all services
          </BaseButton>
        </div>
      </div>
    </section>
  );
}