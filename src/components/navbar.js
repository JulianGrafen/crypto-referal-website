import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/siteConfig';
import CtaButton from './CtaButton';

const BitcoinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-btcOrange" aria-hidden="true">
    <path d="M17.06 11.57c.59-.69.94-1.59.94-2.57 0-2.21-1.79-4-4-4V3h-2v2H10V3H8v2H5v2h2v10H5v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4 0-1.26-.58-2.39-1.5-3.13l.56-.3zM9 7h5c1.1 0 2 .9 2 2s-.9 2-2 2H9V7zm6 10H9v-4h6c1.1 0 2 .9 2 2s-.9 2-2 2z" />
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

const NAV_LINKS = [
  { label: 'Anleitung', href: '/#anleitung' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Blog', to: '/blog' },
];

/**
 * Responsive navbar with mobile menu toggle.
 * Logo links to Home; CTA button targets the affiliate link.
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-btcSurface border-b border-btcBorder shadow-md">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Hauptnavigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-poppins font-bold text-btcText text-base hover:text-btcOrange transition-colors"
          aria-label="Wie kauft man Bitcoin – zur Startseite"
        >
          <BitcoinIcon />
          <span>{SITE_CONFIG.name}</span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden sm:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href, to }) => (
            <li key={label}>
              {to ? (
                <Link
                  to={to}
                  className="text-btcMuted hover:text-btcText font-medium transition-colors text-sm"
                >
                  {label}
                </Link>
              ) : (
                <a
                  href={href}
                  className="text-btcMuted hover:text-btcText font-medium transition-colors text-sm"
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden sm:block">
          <CtaButton label={SITE_CONFIG.affiliate.ctaLabelShort} size="sm" />
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="sm:hidden text-btcMuted hover:text-btcText transition-colors p-1"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="sm:hidden border-t border-btcBorder bg-btcSurface px-4 pb-4 pt-2"
        >
          <ul className="flex flex-col gap-4 list-none m-0 p-0 mb-4">
            {NAV_LINKS.map(({ label, href, to }) => (
              <li key={label}>
                {to ? (
                  <Link
                    to={to}
                    onClick={closeMobileMenu}
                    className="text-btcText font-medium text-base"
                  >
                    {label}
                  </Link>
                ) : (
                  <a
                    href={href}
                    onClick={closeMobileMenu}
                    className="text-btcText font-medium text-base"
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <CtaButton label={SITE_CONFIG.affiliate.ctaLabel} size="sm" className="w-full justify-center" />
        </div>
      )}
    </header>
  );
};

export default Navbar;
