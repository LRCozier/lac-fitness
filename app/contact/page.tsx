import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/Contactform';
import FaqAccordion from '@/components/ui/Faqaccordion';
import { FAQ_ITEMS } from '@/lib/faqs';

export const metadata: Metadata = {
  title: 'Get in Touch',
  description:
    'Book a free consultation with L.A.C. Fitness. Tell me about your goals, training history, and any concerns.',
};

const SNIPPET_IDS = ['experience', 'injury', 'cancellations'];

export default function ContactPage() {
  const snippet = FAQ_ITEMS.filter((item) => SNIPPET_IDS.includes(item.id));

  return (
    <section className="section">
      <div className="container container--narrow">
        <header className="page-header">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">
            Not sure which option is right for you? Tell me about your goals, training
            history, and any concerns &mdash; I&rsquo;ll help you decide what makes the
            most sense.
          </p>
        </header>

        <div className="contact-form-container">
          <ContactForm />
        </div>

        <div className="contact-faq-snippet">
          <h2 className="section-title">Common Questions</h2>
          <p className="section-lede">
            A few quick answers for people who are nervous about starting, worried about
            injuries, or unsure about commitment.
          </p>

          <FaqAccordion items={snippet} singleOpen />

          <p className="contact-faq-link">
            Want to read more? Visit the{' '}
            <Link href="/faq" className="inline-link">
              full FAQ page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}