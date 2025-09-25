'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DumbbellIcon, MenuIcon, XIcon } from '../ui/icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
          <DumbbellIcon className="navbar-logo-icon" />
          <span className="navbar-logo-text">LUKE COZIER</span>
        </Link>
        
        <div className="nav-links-desktop">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="mobile-menu-container">
          <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
            <span className="sr-only">Open main menu</span>
            {isOpen ? <XIcon className="mobile-menu-icon" /> : <MenuIcon className="mobile-menu-icon" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="nav-links-mobile">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link-mobile ${isActive(link.href) ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
