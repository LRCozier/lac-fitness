import BaseButton from '@/components/ui/Basebutton';

export default function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <h1 id="hero-heading" className="hero-title">
          <span className="block">Build Strength.</span>
          <span className="block text-accent">Build Confidence.</span>
        </h1>

        <p className="hero-lede">
          Supportive 1:1 training for beginners, returners, and everyday adults who
          want to build strength without intimidation. Based in Kingston Upon Thames.
        </p>

        <div className="hero-cta">
          <BaseButton to="/contact" variant="primary" size="lg">
            Book Your Free Consultation
          </BaseButton>
          <BaseButton to="/services" variant="secondary" size="lg">
            View Coaching Services
          </BaseButton>
        </div>
      </div>
    </section>
  );
}