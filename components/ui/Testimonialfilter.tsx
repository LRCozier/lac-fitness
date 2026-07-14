'use client';

import { useState } from 'react';
import TestimonialCard from '@/components/ui/cards/Testimonialcard';
import type { Testimonial } from '@/lib/types';

export default function TestimonialFilter({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [selected, setSelected] = useState('All');

  const categories = ['All', ...new Set(testimonials.map((item) => item.category))];

  const visible =
    selected === 'All'
      ? testimonials
      : testimonials.filter((item) => item.category === selected);

  return (
    <>
      <div className="testimonial-categories" role="group" aria-label="Filter testimonials by category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`testimonial-category-btn${selected === category ? ' active' : ''}`}
            aria-pressed={selected === category}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="testimonial-grid" aria-live="polite">
        {visible.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </>
  );
}