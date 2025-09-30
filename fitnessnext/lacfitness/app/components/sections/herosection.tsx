import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: "url('https://placehold.co/1920x1080/000000/ffffff?text=HERO+IMAGE')" }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          <span className="block">BUILD STRENGTH FOR LIFE</span>
          <span className="block text-accent">NOT JUST FOR LOOKS</span>
        </h1>
        <p>Tired of fitness that's only skin deep? I help busy professionals and gym newcomers in Richmond build real, 
          resilient strength—the kind that powers you through your career, lets you play with your kids without getting tired, 
          and builds unshakeable confidence from the inside out..</p>
        <div className="hero-cta">
          <Link href="/services" className="btn btn-primary btn-lg">VIEW MY SERVICES</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
