import BaseButton from '@/components/ui/Basebutton';

export default function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="container cta-band__inner">
        <h2 id="cta-heading" className="cta-band__title">
          Start Going the Distance Today
        </h2>
        <p className="cta-band__text">
          The first consultation is free, and there's no obligation. 
          Tell me where you're starting from — and where you'd like to get to — and we'll map out the rest together.
        </p>
        <BaseButton to="/contact" variant="primary" size="lg">
          Book Your Free Consultation
        </BaseButton>
      </div>
    </section>
  );
}