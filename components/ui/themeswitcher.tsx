'use client';

import { useTheme } from '@/lib/themecontext';

export default function ThemeSwitcher() {
  const { isLight, toggleTheme } = useTheme();

  return (
    <div className="theme-toggle-wrapper">
      <button
        type="button"
        className="theme-toggle"
        role="switch"
        aria-checked={isLight}
        aria-label="Toggle between light and dark theme"
        onClick={toggleTheme}
        suppressHydrationWarning
      >
        <span className="theme-toggle__track" aria-hidden="true">
          <span className="theme-toggle__icon theme-toggle__icon--sun">
            <svg viewBox="0 0 24 24" className="theme-toggle__svg" focusable="false">
              <circle cx="12" cy="12" r="4.5" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <line x1="12" y1="2.5" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="21.5" />
                <line x1="2.5" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="21.5" y2="12" />
                <line x1="5.6" y1="5.6" x2="7.4" y2="7.4" />
                <line x1="16.6" y1="16.6" x2="18.4" y2="18.4" />
                <line x1="18.4" y1="5.6" x2="16.6" y2="7.4" />
                <line x1="7.4" y1="16.6" x2="5.6" y2="18.4" />
              </g>
            </svg>
          </span>

          <span className="theme-toggle__icon theme-toggle__icon--moon">
            <svg viewBox="0 0 24 24" className="theme-toggle__svg" focusable="false">
              <path
                fill="currentColor"
                d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z"
              />
            </svg>
          </span>

          <span className="theme-toggle__thumb" />
        </span>

        <span className="theme-toggle__label" suppressHydrationWarning>
          {isLight ? 'Light' : 'Dark'}
        </span>
      </button>
    </div>
  );
}