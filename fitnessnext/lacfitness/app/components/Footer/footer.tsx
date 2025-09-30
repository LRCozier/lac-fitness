import Link from 'next/link';
import { DumbbellIcon } from '../ui/icons';
import { SITE_CONFIG } from '@/app/lib/constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <Link href="/" className="footer-brand">
          <DumbbellIcon className="footer-logo-icon" />
          <span className="footer-logo-text">LAC FITNESS</span>
        </Link>
        
        <div className="footer-links">
          <Link href="/about" className="footer-link">About</Link>
          <Link href="/services" className="footer-link">Services</Link>
          <Link href="/blog" className="footer-link">Blog</Link>
          <Link href="/contact" className="footer-link">Contact</Link>
        </div>
        
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} LAC Fitness. All rights reserved.
        </p>
        <p className="footer-location">Personal Training in Richmond Upon Thames.</p>
      </div>
    </footer>
  );
}

export default Footer;