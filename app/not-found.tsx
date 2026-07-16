import type { Metadata } from 'next';
import BaseButton from '@/components/ui/Basebutton';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <section className="section section--centered not-found-wrapper">
      <div className="container text-center">
        <p className="not-found-code">404</p>
        <h1 className="page-title">Page Not Found</h1>

        <p className="section-lede">
          Looks like this page skipped leg day &mdash; and every other day. The link you
          followed is out of form. Let&rsquo;s get you back on track.
        </p>

        <div className="not-found-actions">
          <BaseButton to="/" variant="primary" size="lg">
            Back to Homepage
          </BaseButton>
          <BaseButton to="/contact" variant="secondary" size="lg">
            Get in Touch
          </BaseButton>
        </div>
      </div>
    </section>
  );
}