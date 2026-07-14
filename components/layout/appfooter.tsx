import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { SiInstagram, SiTiktok } from '@icons-pack/react-simple-icons';

import {
  CIMSPA_VERIFY_URL,
  CONTACT_INFO,
  FOOTER_LINKS,
  SOCIAL_LINKS,
  TRAINING_LOCATION,
} from '@/lib/constants';
import type { SocialIcon } from '@/lib/types';

const socialIcons: Record<SocialIcon, React.ComponentType<{ className?: string }>> = {
  instagram: SiInstagram,
  tiktok: SiTiktok,
};

export default function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>

      <div className="container footer-container">
        <div className="footer-columns">
          <nav className="footer-column" aria-label="Footer">
            <h3 className="footer-column-title">Navigate</h3>
            <ul className="footer-link-list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-column">
            <h3 className="footer-column-title">Follow</h3>
            <ul className="footer-link-list">
              {SOCIAL_LINKS.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link footer-link--icon"
                    >
                      <Icon className="footer-icon footer-icon--brand" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Get in touch</h3>
            <ul className="footer-link-list">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="footer-link footer-link--icon"
                >
                  <Mail className="footer-icon" aria-hidden="true" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
            </ul>

            <h3 className="footer-column-title footer-column-title--spaced">
              Training location
            </h3>
            <address className="footer-address">
              <span className="footer-venue">{TRAINING_LOCATION.venue}</span>
              {TRAINING_LOCATION.address}
            </address>
          </div>

          <div className="footer-column footer-column--badge">
            <a
              href={CIMSPA_VERIFY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-badge"
              aria-label="Verify CIMSPA accreditation (opens in a new tab)"
            >
              <Image
                src="/images/cimspa-badge.png"
                alt="CIMSPA accredited professional"
                width={150}
                height={60}
                className="footer-badge-image"
              />
            </a>
          </div>
        </div>

        <div className="footer-base">
          <p className="footer-copyright">
            &copy; {year} Luke Rudderham-Cozier. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}