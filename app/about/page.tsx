import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Luke Cozier, MCIMSPA',
  description:
    'CIMSPA-registered personal trainer in Kingston Upon Thames. Strength coaching for people who have felt unseen, intimidated, or stuck in gym environments.',
};

const COACHING_PRINCIPLES = [
  ['Compound movements', 'Mastering the basics that give the biggest return.'],
  ['Progressive overload', 'A structured path to getting stronger, safely.'],
  ['Technique first', 'Safety and longevity over ego lifting.'],
  ['Resilience', 'Building a body and mind that can handle life\u2019s challenges.'],
];

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <header className="page-header">
          <h1 className="page-title">About Luke Cozier, MCIMSPA</h1>
          <p className="page-subtitle">CIMSPA Registered Personal Trainer</p>
        </header>

        <div className="about-grid">
          <div className="about-image-container">
            <Image
              className="about-image"
              src="/images/ProfilePicture.jpg"
              alt="Luke Cozier, strength and conditioning coach at L.A.C. Fitness"
              width={420}
              height={520}
              priority
            />
          </div>

          <article className="about-content prose">
            <h2>My mission: to redefine what fitness means</h2>
            <p>
              Fitness isn&rsquo;t about a number on a scale or trying to &ldquo;earn&rdquo;
              confidence. It&rsquo;s about how your body supports your life &mdash; lifting
              your kids without fear of injury, finishing the day with energy left in the
              tank, and standing a little taller because you finally trust yourself.
            </p>
            <p>
              It&rsquo;s quiet confidence, built rep by rep. It&rsquo;s strength that
              follows you out of the gym.
            </p>

            <h2>I know the other side &mdash; because I lived it</h2>
            <p>
              I didn&rsquo;t grow up strong or athletic. I grew up as the fat kid &mdash;
              the one who avoided mirrors, hated P.E., and pretended not to care while
              quietly feeling humiliated. I remember the sting of being picked last, the
              anxiety of changing rooms, and the way you start to shrink yourself so no one
              notices you.
            </p>
            <p>
              The weight I carried wasn&rsquo;t just physical. It was emotional. It was
              social. It was identity.
            </p>
            <p>
              Walking into a gym for the first time didn&rsquo;t fix that overnight &mdash;
              but it changed the direction of my life. Strength training gave me the first
              real wins I&rsquo;d had in years. It became proof that I could grow, that I
              wasn&rsquo;t stuck, and that self-belief is something you build, not something
              you&rsquo;re born with.
            </p>
            <p>
              That confidence followed me into my personal and professional life. It changed
              how I show up. It changed who I believe I can be. And now, I help others find
              that same shift.
            </p>

            <h2>What I coach</h2>
            <p>I specialise in evidence-based strength training that prioritises:</p>
            <ul className="principle-list">
              {COACHING_PRINCIPLES.map(([title, body]) => (
                <li key={title}>
                  <strong>{title}:</strong> {body}
                </li>
              ))}
            </ul>
            <p>
              This isn&rsquo;t about punishing yourself for the past. It&rsquo;s about
              building a future you&rsquo;re proud to grow into.
            </p>

            <h2>The mission of L.A.C. Fitness</h2>
            <p>
              Not to create athletes. Not to chase fads or transformations for social media.
              But to help people who feel how I used to feel &mdash; unseen, intimidated,
              stuck &mdash; discover what strength can do for them.
            </p>
            <p>Because once you learn to lift, you learn to live differently.</p>
          </article>
        </div>
      </div>
    </section>
  );
}