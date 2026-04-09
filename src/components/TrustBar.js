import React from 'react';
import { TRUST_STATS } from '../data/trustStats';

const TrustStatIcon = ({ svgPath }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
    <path d={svgPath} />
  </svg>
);

const TrustStatItem = ({ value, label, svgPath }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <span className="text-btcOrange">
      <TrustStatIcon svgPath={svgPath} />
    </span>
    <span className="font-poppins font-bold text-btcText text-2xl leading-none">{value}</span>
    <span className="text-btcMuted text-sm">{label}</span>
  </div>
);

/**
 * Social-proof bar displayed directly below the Hero section.
 * Data-driven via trustStats.js – add or remove stats there.
 */
const TrustBar = () => (
  <section
    aria-label="Binance Vertrauensindikatoren"
    className="bg-btcSurface border-y border-btcBorder py-12 px-4"
  >
    <div className="max-w-4xl mx-auto">
      <p className="text-btcMuted text-xs text-center uppercase tracking-widest mb-8 font-medium">
        Warum Millionen Anleger Binance vertrauen
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-8 list-none p-0 m-0">
        {TRUST_STATS.map((stat) => (
          <li key={stat.id}>
            <TrustStatItem value={stat.value} label={stat.label} svgPath={stat.svgPath} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TrustBar;
