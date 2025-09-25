import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          <span className="block">BEYOND THE MIRROR</span>
          <span className="block text-accent">BUILD REAL STRENGTH</span>
        </h1>
        <p>Stop chasing aesthetics. Start building functional power, mastering movement, and unlocking your true physical potential.</p>
        <div className="hero-cta">
          <Link href="/services" className="btn btn-primary btn-lg">
            VIEW MY SERVICES
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;