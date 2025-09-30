'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DumbbellIcon, MenuIcon, XIcon } from '../ui/icons';
import { NAV_LINKS } from '@/app/lib/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') setIsOpen(false);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation" onKeyDown={handleKeyDown}>
      <div className="container navbar-container">
        <Link href="/" className="navbar-brand" onClick={handleLinkClick} aria-label="Luke Cozier - Home">
          <DumbbellIcon className="navbar-logo-icon" aria-hidden="true" />
          <span className="navbar-logo-text">LUKE COZIER</span>
        </Link>
        
        <div className="nav-links-desktop">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className={`nav-link ${isActive(link.href) ? 'active' : ''}`} aria-current={isActive(link.href) ? 'page' : undefined}>
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="mobile-menu-container">
          <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close main menu' : 'Open main menu'}>
            <span className="sr-only">{isOpen ? 'Close main menu' : 'Open main menu'}</span>
            {isOpen ? <XIcon className="mobile-menu-icon" aria-hidden="true" /> : <MenuIcon className="mobile-menu-icon" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="nav-links-mobile" role="menu">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className={`nav-link-mobile ${isActive(link.href) ? 'active' : ''}`} onClick={handleLinkClick} role="menuitem" aria-current={isActive(link.href) ? 'page' : undefined}>
              {link.label.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;