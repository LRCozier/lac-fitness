'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dumbbell, Menu, X } from 'lucide-react';

import { NAV_LINKS } from '@/lib/constants';
import ThemeSwitcher from '../ui/themeswitcher';

export default function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = useCallback(
    (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href)),
    [pathname],
  );

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Main">
        <div className="container navbar-container">
          <Link href="/" className="navbar-brand" aria-label="L.A.C. Fitness — home">
            <Dumbbell className="navbar-logo-icon" aria-hidden="true" />
            <span className="navbar-logo-text">L.A.C. FITNESS</span>
          </Link>

          <div className="nav-links-desktop">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${isActive(link.href) ? ' active' : ''}`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
            <ThemeSwitcher />

            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
            >
              {isOpen ? (
                <X className="mobile-menu-icon" aria-hidden="true" />
              ) : (
                <Menu className="mobile-menu-icon" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div id="mobile-navigation" className="nav-links-mobile" hidden={!isOpen}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link-mobile${isActive(link.href) ? ' active' : ''}`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}