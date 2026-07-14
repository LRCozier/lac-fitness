import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { CIMSPA_VERIFY_URL, TRAINING_LOCATION } from '@/lib/constants';

export default function TrustBar() {
  return (
    <aside className="trust-bar" aria-label="Accreditations and training location">
      <div className="container trust-bar__inner">
        <p className="trust-bar__label">Proudly accredited &amp; trusted</p>

        <a
          href={CIMSPA_VERIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="trust-bar__item trust-bar__item--link"
          aria-label="Verify CIMSPA accreditation (opens in a new tab)"
        >
          <Image
            src="/images/cimspa-badge.png"
            alt="CIMSPA accredited professional"
            width={110}
            height={44}
            className="trust-bar__badge"
          />
          <span className="trust-bar__caption">
            <span className="trust-bar__caption-strong">MCIMSPA</span>
            Registered &amp; verifiable
          </span>
        </a>

        <div className="trust-bar__item">
          <MapPin className="trust-bar__icon" aria-hidden="true" />
          <span className="trust-bar__caption">
            <span className="trust-bar__caption-strong">{TRAINING_LOCATION.venue}</span>
            Kingston Upon Thames
          </span>
        </div>

        <Link href="/about" className="trust-bar__item trust-bar__item--link">
          <span className="trust-bar__caption">
            <span className="trust-bar__caption-strong">Beginners welcome</span>
            Start where you are
          </span>
        </Link>
      </div>
    </aside>
  );
}