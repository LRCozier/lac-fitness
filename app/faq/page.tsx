import type { Metadata } from 'next';
import Link from 'next/link';
import FaqAccordion from '@/components/ui/Faqaccordion';
import { FAQ_ITEMS } from '@/lib/faqs';
import type { FAQCategory } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Qualifications, cancellations, injuries, and gym nerves. Straight answers about training with L.A.C. Fitness.',
};

const GROUPS: { id: string; category: FAQCategory; heading: string }[] = [
  { id: 'faq-basics', category: 'The Basics', heading: 'The Basics' },
  { id: 'faq-fine-print', category: 'Fine Print', heading: 'The Fine Print, Made Easy' },
  { id: 'faq-personal', category: 'Personal Touch', heading: 'The Personal Touch' },
];

export default function FaqPage() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <header className="page-header">
          <h1 className="page-title">Frequently Asked Questions</h1>
          <p className="page-subtitle">
            Straight answers, no fluff. If you still have questions, head to the{' '}
            <Link href="/contact" className="inline-link">
              contact page
            </Link>
            .
          </p>
        </header>

        {GROUPS.map((group) => {
          const items = FAQ_ITEMS.filter((item) => item.category === group.category);
          if (!items.length) return null;

          return (
            <section key={group.id} className="faq-group" aria-labelledby={group.id}>
              <h2 id={group.id} className="faq-group-title">
                {group.heading}
              </h2>
              <FaqAccordion items={items} singleOpen />
            </section>
          );
        })}
      </div>
    </section>
  );
}