import { Post, Testimonials, Service } from '../types';

// ===== SITE CONFIGURATION =====
export const SITE_CONFIG = {
  name: 'Luke Cozier Strength & Conditioning',
  title: 'Luke Cozier - Strength & Conditioning | Richmond Upon Thames',
  description: 'Professional strength and conditioning training focused on skill progression and functional strength. Personal training in Richmond Upon Thames.',
  url: 'https://lukecozier.com',
  author: 'Luke Cozier',
  location: 'Richmond Upon Thames, London',
  email: 'luke@lukecozier.com',
  phone: '+44 20 1234 5678',
  social: {
    instagram: 'https://instagram.com/lukecozier',
    twitter: 'https://twitter.com/lukecozier',
    linkedin: 'https://linkedin.com/in/lukecozier',
  },
} as const;

// ===== NAVIGATION =====
export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
] as const;

// Fallbacks
export const fallbackBlogPosts: Post[] = [
  {
    id: 1,
    title: "The 5 Foundational Lifts You're Not Doing Right",
    excerpt: "Master the basics before you touch anything complex. We break down the squat, deadlift, bench, overhead press, and row.",
    content: "Full content would go here... This is a comprehensive guide to mastering the fundamental lifts that form the cornerstone of any effective strength training program.",
    category: 'Technique',
    slug: 'foundational-lifts',
    featuredImage: { 
      url: 'https://placehold.co/600x400/18181b/facc15?text=Foundational+Lifts',
      alt: 'Proper lifting technique demonstration'
    },
    publishedAt: new Date('2024-01-15').toISOString()
  },
  {
    id: '2',
    title: "Why 'Progressive Overload' is More Than Just Adding Weight",
    excerpt: "True progress comes from strategic, intelligent programming. Learn how to manipulate variables for continuous gains.",
    content: "Progressive overload is the fundamental principle behind all strength and muscle gains. But it's not just about adding more weight to the bar...",
    category: 'Programming',
    slug: 'progressive-overload',
    featuredImage: { 
      url: 'https://placehold.co/600x400/18181b/f87171?text=Progression',
      alt: 'Progress tracking and programming'
    },
    publishedAt: new Date('2024-01-08').toISOString()
  },
  {
    id: '3',
    title: "Nutrition for Strength: Fueling Performance, Not Just Aesthetics",
    excerpt: "Forget 'beach body' diets. Discover how to eat for power, recovery, and long-term health.",
    content: "Nutrition plays a crucial role in strength development. It's not about looking good, but about performing at your best...",
    category: 'Nutrition',
    slug: 'nutrition-for-strength',
    featuredImage: { 
      url: 'https://placehold.co/600x400/18181b/4ade80?text=Nutrition',
      alt: 'Healthy nutrition for strength training'
    },
    publishedAt: new Date('2024-01-01').toISOString()
  },
  {
    id: '4',
    title: "The Mind-Muscle Connection is Real, and Here's How to Build It",
    excerpt: "Lifting is a mental game. We explore the neurological aspects of strength training and how to leverage them.",
    content: "The connection between your mind and muscles is more than just a metaphor. It's a physiological reality that can significantly impact your training...",
    category: 'Mindset',
    slug: 'mind-muscle-connection',
    featuredImage: { 
      url: 'https://placehold.co/600x400/18181b/60a5fa?text=Mindset',
      alt: 'Mental focus during training'
    },
    publishedAt: new Date('2023-12-25').toISOString()
  }
];

export const fallbackTestimonials: Testimonials[] = [
  {
    id: '1',
    clientName: 'James P.',
    location: 'Richmond',
    testimonialText: "Luke's focus on technique completely changed the game for me. I'm stronger at 35 than I was at 25, and I'm finally injury-free.",
    rating: 5,
    category: 'Strength',
    featured: true,
    createdAt: new Date('2024-01-10').toISOString()
  },
  {
    id: '2',
    clientName: 'Tom H.',
    location: 'Twickenham',
    testimonialText: "I came to Luke to get stronger for rugby. Not only did my performance on the pitch improve, but my overall confidence went through the roof.",
    rating: 5,
    category: 'Conditioning',
    featured: true,
    createdAt: new Date('2024-01-05').toISOString()
  },
  {
    id: '3',
    clientName: 'David R.',
    location: 'Kew',
    testimonialText: "The programming is smart, challenging, and effective. No fluff, no wasted time. Just pure, measurable progress every single week.",
    rating: 5,
    category: 'Programming',
    featured: true,
    createdAt: new Date('2024-01-02').toISOString()
  },
  {
    id: '4',
    clientName: 'Michael S.',
    location: 'Richmond',
    testimonialText: "After years of inconsistent training, Luke gave me the structure and accountability I needed. The results speak for themselves.",
    rating: 4,
    category: 'Consistency',
    featured: false,
    createdAt: new Date('2023-12-28').toISOString()
  }
];

export const fallbackServices: Service[] = [
  {
    id: '1',
    title: "1-on-1 Personal Training",
    price: "Enquire for Pricing",
    description: "Completely personalized training programs tailored to your specific goals, fitness level, and schedule.",
    features: [
      "Fully personalized program design",
      "100% individual attention and coaching",
      "Technique mastery and correction",
      "Nutritional guidance and support",
      "Flexible scheduling options",
      "The fastest route to your goals"
    ],
    ctaText: "Book Consultation",
    duration: "60 minutes",
    intensity: "High",
    recommendedFor: ["Serious athletes", "Specific goal setting", "Technique focus"]
  },
  {
    id: '2',
    title: "Partner (2-on-1) Training",
    price: "Enquire for Pricing",
    description: "Train with a friend or partner for shared motivation and cost-effective personal training.",
    features: [
      "Train with a friend or partner",
      "Cost-effective motivation",
      "Shared program with individual coaching",
      "Competitive and supportive environment",
      "Ideal for couples or training partners",
      "Maintains individual attention"
    ],
    ctaText: "Learn More",
    duration: "60 minutes",
    intensity: "Medium-High",
    recommendedFor: ["Couples", "Training partners", "Small groups"]
  },
  {
    id: '3',
    title: "Online Coaching & Programming",
    price: "From £200/month",
    description: "Professional coaching and programming delivered through our custom app, perfect for busy schedules.",
    features: [
      "Custom programming via mobile app",
      "Weekly video check-ins and feedback",
      "Technique analysis via video submission",
      "Full access via messaging support",
      "Train on your own schedule, anywhere",
      "Regular progress tracking and adjustments"
    ],
    ctaText: "Apply Now",
    duration: "Flexible",
    intensity: "Custom",
    recommendedFor: ["Busy professionals", "Remote training", "Self-motivated individuals"]
  }
];

// BUSINESS INFO
export const BUSINESS_INFO = {
  specialties: [
    "Strength Training",
    "Conditioning",
    "Movement Skills",
    "Injury Prevention",
    "Performance Enhancement"
  ],
  trainingApproach: [
    "Evidence-based methods",
    "Individualized programming",
    "Progressive overload",
    "Technical mastery",
    "Long-term sustainability"
  ],
  areasServed: [
    "Richmond Upon Thames",
    "Twickenham",
    "Kew",
    "Mortlake",
    "Barnes",
    "East Sheen"
  ]
} as const;

// CONTACT INFO
export const CONTACT_INFO = {
  email: 'lrcozier@gmail.com',
  consultationHours: [
    'Monday - Friday: 5:00 PM - 8:00 PM',
    'Saturday: 9:00 AM - 2:00 PM',
    'Sunday: 9:00 AM - 2:00 PM'
  ]
} as const;
