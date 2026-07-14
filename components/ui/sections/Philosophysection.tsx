import ProgressiveOverloadChart from '@/components/ui/Progressiveoverloadchart';

export default function PhilosophySection() {
  return (
    <section className="section" aria-labelledby="philosophy-heading">
      <div className="container philosophy-layout">
        <div className="philosophy-copy">
          <p className="section-eyebrow">How it works</p>
          <h2 id="philosophy-heading" className="section-title section-title--left">
            Training Philosophy
          </h2>

          <p className="section-text">
            Strength is built by doing slightly more, slightly better, over time.
            That&rsquo;s progressive overload, and it&rsquo;s the engine behind every
            programme I write &mdash; whether you&rsquo;re lifting a barbell for the
            first time or coming back after years away.
          </p>

          <p className="section-text">
            No fads, no punishment sessions, no training you into the ground to prove
            a point. Small, deliberate increases. Technique that holds up under load.
            Progress you can still see in twelve months.
          </p>
        </div>

        <div className="philosophy-visual">
          <ProgressiveOverloadChart />
        </div>
      </div>
    </section>
  );
}