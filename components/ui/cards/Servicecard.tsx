import { Laptop, Users, User } from 'lucide-react';
import BaseButton from '@/components/ui/Basebutton';
import type { Service } from '@/lib/types';

const iconFor = (title: string) => {
  const key = title.toLowerCase();
  if (key.includes('online')) return Laptop;
  if (key.includes('2-to-1') || key.includes('group')) return Users;
  return User;
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconFor(service.title);

  return (
    <article className="service-card">
      <span className="service-icon" aria-hidden="true">
        <Icon />
      </span>

      <h3 className="service-title">{service.title}</h3>
      <p className="service-price">{service.price}</p>
      <p className="service-description">{service.description}</p>

      <ul className="service-features">
        {service.features.map((feature) => (
          <li key={feature} className="service-feature">
            {feature}
          </li>
        ))}
      </ul>

      <BaseButton to="/contact" variant="secondary" className="service-cta">
        {service.ctaText}
      </BaseButton>
    </article>
  );
}