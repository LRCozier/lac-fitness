import Image from 'next/image';
import { Check } from 'lucide-react';
import BaseButton from '@/components/ui/Basebutton';

const ASSURANCES = [
  'Evidence-based coaching',
  'Tailored to you',
  'Technique first, always',
  'Strength & endurance coaching',
];

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-media">
        <Image
          src="/images/heroimage-darktheme.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={85}
        />
      </div>

      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <p className="eyebrow">Strength. Endurance. Confidence.</p>

        <h1 id="hero-heading" className="hero-title">
          <span className="block">Get Strong.</span>
          <span className="block">
            Go The <span className="accent-underline">Distance.</span>
          </span>
        </h1>

        <p className="hero-lede">
          Supportive 1:1 coaching that builds real strength — no intimidation, no ego — 
          then the conditioning to take it further, whether that's everyday confidence or 
          your first finish line. Based in Kingston Upon Thames.
        </p>

        <div className="hero-cta">
          <BaseButton to="/contact" variant="primary" size="lg">
            Book Your Free Consultation
          </BaseButton>
          <BaseButton to="/services" variant="secondary" size="lg">
            View Coaching Services
          </BaseButton>
        </div>

        <ul className="hero-assurances">
          {ASSURANCES.map((item) => (
            <li key={item} className="hero-assurance">
              <Check aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}