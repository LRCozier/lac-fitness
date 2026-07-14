import { ClipboardList, Dumbbell, HeartHandshake } from 'lucide-react';
import BaseButton from '@/components/ui/Basebutton';
import ProgressiveOverloadChart from '@/components/ui/Progressiveoverloadchart';

const PILLARS = [
  {
    icon: Dumbbell,
    title: 'Technique First',
    body: 'Form and movement quality before ego. Lift well, and you progress well.',
  },
  {
    icon: ClipboardList,
    title: 'Progressive Overload',
    body: 'Slightly more, slightly better, over time. Structured programming \u2014 never guesswork.',
  },
  {
    icon: HeartHandshake,
    title: 'Support Beyond the Session',
    body: 'Habits, recovery, and mindset. Train harder, and live stronger for it.',
  },
];

export default function SummarySection() {
  return (
    <section className="section--band" aria-labelledby="approach-heading">
      <div className="band-grid band-grid--chart">
        <div className="band-copy">
          <p className="eyebrow">My approach</p>

          <h2 id="approach-heading">
            Strength that transfers
            <br />
            to real life.
          </h2>

          <p>
            No crash diets, no gimmicks, no punishment sessions. Strength is built by
            doing slightly more, slightly better, over time &mdash; and by technique that
            still holds up under load twelve months from now.
          </p>

          <ul className="band-pillars">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <li key={title} className="band-pillar">
                <Icon aria-hidden="true" />
                <span className="band-pillar__title">{title}</span>
                <span className="band-pillar__body">{body}</span>
              </li>
            ))}
          </ul>

          <BaseButton to="/about" variant="secondary">
            Learn more about me
          </BaseButton>
        </div>

        <div className="band-visual">
          <ProgressiveOverloadChart />
        </div>
      </div>
    </section>
  );
}