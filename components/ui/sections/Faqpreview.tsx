import FaqAccordion from '@/components/ui/Faqaccordion';
import BaseButton from '@/components/ui/Basebutton';
import { FAQ_ITEMS } from '@/lib/faqs';

export default function FaqPreview() {
  const items = FAQ_ITEMS.slice(0, 3);

  return (
    <section className="section" aria-labelledby="faq-preview-heading">
      <div className="container container--narrow">
        <p className="section-eyebrow">Before you ask</p>
        <h2 id="faq-preview-heading" className="section-title">
          Common Questions
        </h2>

        <FaqAccordion items={items} />

        <div className="section-actions">
          <BaseButton to="/faq" variant="secondary">
            See all questions
          </BaseButton>
        </div>
      </div>
    </section>
  );
}