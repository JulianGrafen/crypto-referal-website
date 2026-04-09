import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../data/siteConfig';
import CtaButton from './CtaButton';

const BitcoinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-btcOrange" aria-hidden="true">
    <path d="M17.06 11.57c.59-.69.94-1.59.94-2.57 0-2.21-1.79-4-4-4V3h-2v2H10V3H8v2H5v2h2v10H5v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4 0-1.26-.58-2.39-1.5-3.13l.56-.3zM9 7h5c1.1 0 2 .9 2 2s-.9 2-2 2H9V7zm6 10H9v-4h6c1.1 0 2 .9 2 2s-.9 2-2 2z" />
  </svg>
);

const FOOTER_LINKS = [
  { label: 'Startseite', to: '/' },
  { label: 'Anleitung', href: '/#anleitung' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Blog', to: '/blog' },
  { label: 'Impressum', to: '/impressum' },
];

const currentYear = new Date().getFullYear();

/**
 * Site footer with quick links, affiliate CTA and legal copy.
 */
const Footer = () => (
  <footer className="bg-btcSurface border-t border-btcBorder" aria-label="Seitenfuß">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">

      {/* Final CTA block */}
      <div className="text-center mb-12">
        <h2 className="font-poppins font-bold text-btcText text-2xl mb-3">
          Bereit, dein erstes Bitcoin zu kaufen?
        </h2>
        <p className="text-btcMuted mb-6 max-w-md mx-auto">
          Registriere dich jetzt kostenlos auf Binance und sichere dir dauerhaft 10 % Rabatt
          auf alle Handelsgebühren.
        </p>
        <CtaButton />
      </div>

      <hr className="border-btcBorder mb-10" />

      {/* Logo + links row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-2 font-poppins font-bold text-btcText text-sm">
          <BitcoinIcon />
          <span>{SITE_CONFIG.name}</span>
        </div>

        <nav aria-label="Footer-Navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none p-0 m-0">
            {FOOTER_LINKS.map(({ label, to, href }) => (
              <li key={label}>
                {to ? (
                  <Link to={to} className="text-btcMuted hover:text-btcText text-sm transition-colors">
                    {label}
                  </Link>
                ) : (
                  <a href={href} className="text-btcMuted hover:text-btcText text-sm transition-colors">
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Legal disclaimer */}
      <p className="text-btcMuted text-xs text-center mt-8 leading-relaxed max-w-2xl mx-auto">
        <strong className="text-btcText">Risikohinweis:</strong> Das Investieren in Kryptowährungen ist mit erheblichen
        Risiken verbunden. Der Wert von Bitcoin kann stark schwanken. Dies ist keine
        Finanzberatung. Investiere nur, was du dir leisten kannst zu verlieren.
        <br />
        <span className="mt-2 block">
          © {currentYear} {SITE_CONFIG.name} · Affiliate-Hinweis: Diese Seite enthält
          Partnerlinks. Beim Klick auf unsere Links erhalten wir eine Provision – für
          dich entstehen keine Mehrkosten.
        </span>
      </p>

    </div>
  </footer>
);

export default Footer;
