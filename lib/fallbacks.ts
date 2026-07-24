import type { Service, Testimonial } from './types';

export const fallbackServices: Service[] = [
  {
    id: '1',
    title: '1-to-1 Personal Training',
    price: 'From £40 per session',
    description:
      'Private coaching built entirely around you: your goals, your ability, and your confidence — whether that means getting strong under the bar or building the engine for a distance.',
    features: [
      'Movement preparation and warm-up specific to your body and your goals',
      'Technique-led coaching with clear, simple cues',
      'Progressive strength and conditioning tailored to your level',
      'Review, reflection, and clear next steps every session',
    ],
    ctaText: 'Book Consultation',
    duration: '60 minutes',
    intensity: 'Varies by individual',
    recommendedFor: [
      'Beginners who want to learn to lift safely and well',
      'Returners rebuilding strength and confidence',
      'Anyone training toward a goal — a lift, a race, or a stronger everyday life',
    ],
  },
  {
    id: '2',
    title: '2-to-1 Group Personal Training',
    price: 'From £50 per session',
    description:
      'Shared coaching for two people who want to train side by side while still getting individual attention and programming.',
    features: [
      'One session, two plans — programming tailored to each person',
      'Technique coaching and feedback for both of you',
      'Pacing and loading adjusted to each individual',
      'A supportive environment with built-in accountability',
    ],
    ctaText: 'Enquire About Availability',
    duration: '60 minutes',
    intensity: 'Medium–High (adjusted per person)',
    recommendedFor: [
      'Partners or friends who want to train together',
      'People who feel more at ease starting alongside someone they know',
      'Anyone wanting a more cost-effective way into expert coaching',
    ],
  },
  {
    id: '3',
    title: 'Online Consultation & Programming',
    price: 'From £40 per hour',
    description:
      'A plan of your own, built to your goals, schedule, and kit — then yours to train independently.',
    features: [
      'Video consultation to understand your goals and context',
      'A training plan built around your schedule and available equipment',
      'Strength, hybrid, or race-focused programming — your call',
      'Optional video form checks and progression updates',
    ],
    ctaText: 'Apply for Programming',
    duration: 'Flexible',
    intensity: 'Custom to you',
    recommendedFor: [
      'Confident, self-directed trainers who want expert structure',
      'People in commercial or home gyms who train best on their own',
      'Anyone outside the Kingston area who wants a plan, not hand-holding',
    ],
  },
  {
    id: '4',
    title: 'Online Coaching',
    price: '£120 per month',
    description:
      'Ongoing coaching wherever you are — programming that adapts to you week by week, with me in your corner the whole way.',
    features: [
      'A fully tailored plan, updated as you progress',
      'Regular check-ins to review, adjust, and keep you on track',
      'Video form checks and technique feedback',
      'Direct messaging support between sessions',
      'Strength and hybrid programming — from first lifts to first finish line',
    ],
    ctaText: 'Apply for Online Coaching',
    duration: 'Monthly, ongoing',
    intensity: 'Custom to you',
    recommendedFor: [
      'People who want ongoing accountability, not just a plan',
      'Hybrid and race clients who need structure more than a spotter',
      'Anyone outside Kingston who wants a real coaching relationship',
    ],
  },
];

export const fallbackTestimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Lillian M',
    location: 'Twickenham',
    testimonialText:
      "After a long time out of the gym I worked with Luke to build my strength and confidence back through lifting. With Luke’s support I saw progress every week and was able to follow this on the spreadsheet he made for me. His knowledge   meant that I learned correct technique and can replicate this in my own gym sessions. I’m back to enjoying the gym and seeing improvements every time.",
    rating: 5,
    category: 'Strength',
    featured: true,
    createdAt: new Date('2026-07-22').toISOString(),
  },
  {
    id: '2',
    clientName: 'Debbie W.',
    location: 'Kingston',
    testimonialText: 
    'I met Luke by chance and I am so glad I did. He helped me ease into the gym and build my confidence to train independently.',   
    rating: 5,
    category: 'Strength',
    featured: true,
    createdAt: new Date('2026-07-12').toISOString(),
  },
  {
    id: '3',
    clientName: 'Lily T.',
    location: 'New Malden',
    testimonialText:
      'I suffer with anxiety and Luke has helped me build my confidence to train in the gym.',
    rating: 4,
    category: 'Consistency',
    featured: false,
    createdAt: new Date('2023-12-28').toISOString(),
  },
 {
  id: '4',
  clientName: 'Kerry F.',
  location: 'Whitton',
  testimonialText:
    "I've been training with Luke and, honestly... what a guy! He's incredibly knowledgeable and explains everything so well. He takes the time to make sure your technique is spot on, so you actually feel confident doing the exercises on your own. He knows exactly how to challenge you while making every session enjoyable. There's always a laugh in between sets (if you can catch your breath! 😂). I couldn't recommend him highly enough! 💪🌟",
  rating: 5,
  category: 'Strength',
  featured: true,
  createdAt: new Date('2023-12-28').toISOString(),
  },
];