import BaseButton from '@/components/ui/Basebutton';

export default function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="container cta-band__inner">
        <h2 id="cta-heading" className="cta-band__title">
          Start Your Strength Journey Today
        </h2>
        <p className="cta-band__text">
          The first consultation is free, and there&rsquo;s no obligation. Tell me
          where you&rsquo;re starting from and we&rsquo;ll work out the rest together.
        </p>
        <BaseButton to="/contact" variant="primary" size="lg">
          Book Your Free Consultation
        </BaseButton>
      </div>
    </section>
  );
}