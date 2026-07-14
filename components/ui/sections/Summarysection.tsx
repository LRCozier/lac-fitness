import { Dumbbell, HeartHandshake, TrendingUp } from 'lucide-react';

const PILLARS = [
  {
    icon: Dumbbell,
    title: 'Technique First, Always',
    body: 'Form, safety, and movement quality come before ego. When you lift well, you progress well.',
  },
  {
    icon: TrendingUp,
    title: 'Structured, Not Random',
    body: 'Evidence-informed programming built on progressive overload and clear progression — not guesswork or fad training.',
  },
  {
    icon: HeartHandshake,
    title: 'Support Beyond the Session',
    body: 'Guidance on habits, recovery, and mindset, so you don\u2019t just train harder \u2014 you live stronger.',
  },
];

export default function SummarySection() {
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="container">
        <p className="section-eyebrow">Why train with L.A.C. Fitness</p>
        <h2 id="why-heading" className="section-title">
          Strength that transfers to real life
        </h2>
        <p className="section-lede">
          Not just hard workouts — training that builds confidence, capability, and
          strength you feel every day.
        </p>

        <div className="pillar-grid">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <article key={title} className="pillar-card">
              <span className="pillar-icon" aria-hidden="true">
                <Icon />
              </span>
              <h3 className="pillar-title">{title}</h3>
              <p className="pillar-body">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}