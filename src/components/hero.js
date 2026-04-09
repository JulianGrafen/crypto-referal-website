import React from 'react';
import CtaButton from './CtaButton';

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

const HERO_VALUE_PROPOSITIONS = [
  'Für Anfänger einfach erklärt',
  'In 15 Minuten Bitcoin besitzen',
  '10 % dauerhafter Gebührenrabatt',
];

/**
 * Above-the-fold Hero section.
 * Primary conversion goal: click-through to the Binance affiliate link.
 * H1 targets the primary keyword "Bitcoin kaufen Binance".
 */
const Hero = () => (
  <section
    id="hero"
    className="relative bg-btcDark overflow-hidden"
    aria-labelledby="hero-heading"
  >
    {/* Decorative background glows – purely visual, hidden from screen readers */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-btcOrange opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-600 opacity-5 rounded-full blur-3xl" />
    </div>

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">

      {/* Trust badge */}
      <div className="inline-flex items-center gap-2 bg-btcCard border border-btcBorder rounded-full px-4 py-2 mb-8 text-btcOrange text-sm font-medium">
        <ShieldCheckIcon />
        <span>Schritt-für-Schritt-Anleitung für Bitcoin-Einsteiger</span>
      </div>

      {/* ── H1: Primary keyword + emotional benefit ── */}
      <h1
        id="hero-heading"
        className="font-poppins font-extrabold text-btcText text-3xl sm:text-5xl leading-tight mb-6"
      >
        Bitcoin kaufen auf{' '}
        <span className="text-btcOrange">Binance</span>
        <br className="hidden sm:block" />
        {' '}– Die ultimative Anleitung 2024
      </h1>

      {/* Sub-headline: secondary keyword + urgency + E-E-A-T signal */}
      <p className="text-btcMuted text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Lerne in{' '}
        <strong className="text-btcText font-semibold">4 einfachen Schritten</strong>
        {' '}sicher und günstig dein erstes Bitcoin auf der weltgrößten
        Kryptobörse zu kaufen – speziell für Anfänger, verständlich erklärt.
      </p>

      {/* Value propositions as a scannable trust list */}
      <ul
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12"
        aria-label="Vorteile dieser Anleitung"
      >
        {HERO_VALUE_PROPOSITIONS.map((point) => (
          <li key={point} className="flex items-center gap-2 text-btcText text-sm font-medium">
            <span className="text-btcGreen">
              <CheckIcon />
            </span>
            {point}
          </li>
        ))}
      </ul>

      {/* Primary CTA */}
      <CtaButton size="lg" />

      {/* Micro-copy: remove purchase hesitation */}
      <p className="mt-5 text-btcMuted text-xs">
        Kostenlos registrieren · Kein Mindesteinsatz · 185 Mio. Nutzer vertrauen Binance
      </p>

    </div>
  </section>
);

export default Hero;



