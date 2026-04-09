import React from 'react';
import CtaButton from './CtaButton';

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-400" aria-hidden="true">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

const HERO_BULLETS = [
  'Für Anfänger erklärt',
  'In 15 Min. Bitcoin kaufen',
  '10 % Gebühren-Rabatt',
];

const STAR_COUNT = 5;

/**
 * 2026 Mobile-First Hero.
 * Layout: single column on mobile, wider content box on desktop.
 * Primary conversion goal: CTA click to Binance affiliate link.
 */
const Hero = () => (
  <section
    id="hero"
    className="relative bg-btcDark overflow-hidden"
    aria-labelledby="hero-heading"
  >
    {/* Radial hero glow – decorative only */}
    <div
      className="absolute inset-0 bg-gradient-hero pointer-events-none"
      aria-hidden="true"
    />
    {/* Subtle grid texture */}
    <div
      className="absolute inset-0 opacity-[0.025] pointer-events-none"
      style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      aria-hidden="true"
    />

    <div className="relative max-w-2xl mx-auto px-5 pt-14 pb-16 sm:pt-20 sm:pb-24 text-center">

      {/* ── Social proof rating badge ── */}
      <div className="inline-flex items-center gap-2 card-glass rounded-full px-4 py-2 mb-7 text-sm">
        <span className="flex items-center gap-0.5" aria-label="5 Sterne Bewertung">
          {Array.from({ length: STAR_COUNT }).map((_, i) => <StarIcon key={i} />)}
        </span>
        <span className="text-btcMuted">Über <strong className="text-btcText font-semibold">185 Mio.</strong> Nutzer vertrauen Binance</span>
      </div>

      {/* ── H1 – Primary SEO keyword ── */}
      <h1
        id="hero-heading"
        className="font-poppins font-extrabold text-btcText text-[2rem] leading-[1.15] sm:text-5xl mb-5"
      >
        Bitcoin kaufen auf{' '}
        <span className="text-gradient-orange">Binance</span>
        {' '}– so einfach geht's
      </h1>

      <p className="text-btcMuted text-base sm:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
        Die komplette Schritt-für-Schritt-Anleitung für Einsteiger –
        von der Registrierung bis zum ersten Bitcoin in <strong className="text-btcText font-semibold">15&nbsp;Minuten</strong>.
      </p>

      {/* ── Bullet trust list ── */}
      <ul
        className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10"
        aria-label="Vorteile"
      >
        {HERO_BULLETS.map((text) => (
          <li key={text} className="flex items-center gap-2 text-btcText text-sm font-medium">
            <span className="text-btcGreen"><CheckIcon /></span>
            {text}
          </li>
        ))}
      </ul>

      {/* ── Primary CTA ── */}
      <CtaButton size="lg" className="animate-pulse-glow w-full ss:w-auto justify-center" />

      <p className="mt-4 text-btcMuted text-xs">
        Kostenlos · Kein Mindesteinsatz · Kein Risiko beim Registrieren
      </p>

      {/* ── Trust logos strip ── */}
      <div className="mt-10 pt-8 border-t border-btcBorder flex flex-wrap items-center justify-center gap-4 text-btcMuted text-xs">
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-btcGreen" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
          SSL-verschlüsselt
        </span>
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-btcGreen" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          BaFin-reguliert
        </span>
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-btcGreen" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
          SAFU-Fonds absichert Guthaben
        </span>
      </div>

    </div>
  </section>
);

export default Hero;
