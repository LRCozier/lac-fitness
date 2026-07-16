import { ClipboardList, Dumbbell, HeartHandshake } from 'lucide-react';
import BaseButton from '@/components/ui/Basebutton';
import ProgressiveOverloadChart from '@/components/ui/Progressiveoverloadchart';

const PILLARS = [
  {
    icon: Dumbbell,
    title: 'Technique First',
    body: 'Form and movement quality before ego — under the bar or on the road. Move well, and you progress well.',
  },
  {
    icon: ClipboardList,
    title: 'Progressive Overload',
    body: 'A little more, a little better, session on session — whether that is load or mileage. Structured programming, never guesswork.',
  },
  {
    icon: HeartHandshake,
    title: 'Support Beyond the Session',
    body: 'Habits, recovery, and mindset. Train smart, and live stronger for it.',
  },
];

export default function SummarySection() {
  return (
    <section className="section--band" aria-labelledby="approach-heading">
      <div className="band-grid band-grid--chart">
        <div className="band-copy">
          <p className="eyebrow">My approach</p>

          <h2 id="approach-heading">
            Strength that carries
            <br />
            you further.
          </h2>

          <p>
            No crash diets, no gimmicks, no punishment sessions. Strength is built the 
            same way distance is — slightly more, slightly better, over time — with 
            technique that still holds up under load, and over miles, twelve months from now.
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
            Meet your coach
          </BaseButton>
        </div>

        <div className="band-visual">
          <ProgressiveOverloadChart />
        </div>
      </div>
    </section>
  );
}