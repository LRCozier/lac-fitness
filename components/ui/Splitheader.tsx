import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface SplitHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  link?: { href: string; label: string };
  children: ReactNode;
  headingId: string;
}

export default function SplitHeader({
  eyebrow,
  title,
  lede,
  link,
  children,
  headingId,
}: SplitHeaderProps) {
  return (
    <div className="split-header">
      <div className="split-header__copy">
        <p className="eyebrow">{eyebrow}</p>

        <h2 id={headingId} className="section-title section-title--ruled">
          {title}
        </h2>

        {lede && <p className="section-lede">{lede}</p>}

        {link && (
          <Link href={link.href} className="split-header__link">
            <span>{link.label}</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        )}
      </div>

      <div className="split-header__content">{children}</div>
    </div>
  );
}