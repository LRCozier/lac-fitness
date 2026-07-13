import type { FooterLink, NavLink, SocialLink } from './types';

export const SITE_CONFIG = {
  name: 'L.A.C. Fitness',
  title: 'Luke Cozier — Strength & Conditioning | Kingston Upon Thames',
  description:
    'Supportive 1:1 strength coaching for beginners, returners, and everyday adults. Build strength without intimidation. Based in Kingston Upon Thames.',
  url: 'https://lacfitness.com',
  author: 'Luke Rudderham-Cozier',
  location: 'Kingston Upon Thames, London',
} as const;

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export const CONTACT_INFO = {
  email: 'lacfitnessuk@gmail.com',
  consultationHours: [
    'Mon–Fri: 5 PM – 8 PM',
    'Saturday: 9 AM – 2 PM',
    'Sunday: 9 AM – 2 PM',
  ],
} as const;

export const TRAINING_LOCATION = {
  venue: 'My Fit Pod',
  address: 'Unit 5, The Factory, 2 Acre Rd, Kingston upon Thames KT2 6EF',
} as const;

export const FOOTER_LINKS: FooterLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
  { label: 'Terms & Conditions', path: '/terms' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    url: 'https://instagram.com/lacfitnessuk',
    icon: 'instagram',
  },
  {
    label: 'TikTok',
    url: 'https://tiktok.com/@lacfitnessuk',
    icon: 'tiktok',
  },
];

export const CIMSPA_VERIFY_URL =
  'https://accreditation.cimspa.co.uk/verify/431400930dbc734f82b467c25470a8f06628c515385657103d025cd5bba350fb';