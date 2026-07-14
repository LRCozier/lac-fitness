'use client';

import { useState } from 'react';
import BaseButton from '@/components/ui/Basebutton';
import type { Service } from '@/lib/types';

const normalizeList = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  if (typeof value === 'string')
    return value.split(/[\n,•]/).map((item) => item.trim()).filter(Boolean);
  return [];
};

export default function ServiceTabs({ services }: { services: Service[] }) {
  const [activeId, setActiveId] = useState(services[0]?.id ?? null);
  const active = services.find((service) => service.id === activeId) ?? null;

  if (!active) return null;

  const features = normalizeList(active.features);
  const recommendedFor = normalizeList(active.recommendedFor);

  return (
    <div className="service-tabs">
      <div className="service-tab-list" role="tablist" aria-label="Service types">
        {services.map((service) => {
          const selected = service.id === activeId;
          return (
            <button
              key={service.id}
              type="button"
              id={`service-tab-${service.id}`}
              role="tab"
              className={`service-tab-button${selected ? ' active' : ''}`}
              aria-selected={selected}
              aria-controls={`service-panel-${service.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(service.id)}
            >
              {service.title}
            </button>
          );
        })}
      </div>

      <article
        id={`service-panel-${active.id}`}
        className="service-details-card"
        role="tabpanel"
        aria-labelledby={`service-tab-${active.id}`}
        tabIndex={0}
      >
        <header className="service-details-header">
          <h2 className="service-details-title">{active.title}</h2>
          {active.price && <p className="service-details-price">{active.price}</p>}
          <p className="service-details-description">{active.description}</p>

          {(active.duration || active.intensity) && (
            <div className="service-meta">
              {active.duration && (
                <span className="service-meta-pill">Duration: {active.duration}</span>
              )}
              {active.intensity && (
                <span className="service-meta-pill">Intensity: {active.intensity}</span>
              )}
            </div>
          )}
        </header>

        {features.length > 0 && (
          <section className="service-section">
            <h3>What&rsquo;s included</h3>
            <ul className="service-features">
              {features.map((feature) => (
                <li key={feature} className="service-feature">
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {recommendedFor.length > 0 && (
          <section className="service-section">
            <h3>Ideal for</h3>
            <div className="service-tags">
              {recommendedFor.map((tag) => (
                <span key={tag} className="service-tag">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        )}

        <footer className="service-footer">
          <BaseButton to="/contact" variant="primary" size="lg">
            {active.ctaText || 'Book Consultation'}
          </BaseButton>
          <p className="service-footer-note">
            Not sure which option is right for you? Use the contact form to tell me about
            your situation, and we&rsquo;ll decide together.
          </p>
        </footer>
      </article>
    </div>
  );
}