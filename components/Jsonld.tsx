import { CONTACT_INFO, SITE_CONFIG, TRAINING_LOCATION } from "@/lib/constants";

const schema = {
  '@context': 'https://schema.org',
  '@type': ['ExerciseGym', 'HealthClub'],
  '@id': `${SITE_CONFIG.url}/#business`,
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  email: CONTACT_INFO.email,
  founder: {
    '@type': 'Person',
    name: SITE_CONFIG.author,
    jobTitle: 'Personal Trainer, MCIMSPA',
  },
  address: {
    '@type': 'PostalAddress',
    name: TRAINING_LOCATION.venue,
    streetAddress: 'Unit 5, The Factory, 2 Acre Road',
    addressLocality: 'Kingston upon Thames',
    addressRegion: 'Greater London',
    postalCode: 'KT2 6EF',
    addressCountry: 'GB',
  },
  areaServed: {
    '@type': 'City',
    name: 'Kingston upon Thames',
  },
  priceRange: '££',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '17:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '10:00',
      closes: '15:00',
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}