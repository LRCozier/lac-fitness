'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import type { FAQItem } from '@/lib/types';

interface FaqAccordionProps {
  items: FAQItem[];
  singleOpen?: boolean;
}

export default function FaqAccordion({
  items,
  singleOpen = true,
}: FaqAccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const isOpen = (id: string) => openIds.includes(id);

  const toggle = (id: string) => {
    setOpenIds((current) => {
      if (current.includes(id)) {
        return current.filter((openId) => openId !== id);
      }
      return singleOpen ? [id] : [...current, id];
    });
  };

  return (
    <div className="faq-accordion">
      {items.map((item) => {
        const open = isOpen(item.id);

        return (
          <div key={item.id} className="faq-item">
            <h3 className="faq-question">
              <button
                type="button"
                className="faq-toggle"
                id={`faq-header-${item.id}`}
                aria-expanded={open}
                aria-controls={`faq-panel-${item.id}`}
                onClick={() => toggle(item.id)}
              >
                <span className="faq-toggle-text">{item.question}</span>
                <span className="faq-toggle-icon" aria-hidden="true">
                  {open ? <Minus /> : <Plus />}
                </span>
              </button>
            </h3>


            <div
              id={`faq-panel-${item.id}`}
              className="faq-panel"
              role="region"
              aria-labelledby={`faq-header-${item.id}`}
              hidden={!open}
            >
              <div className="faq-answer">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}