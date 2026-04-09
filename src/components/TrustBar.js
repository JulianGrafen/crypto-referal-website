import React from 'react';
import { TRUST_STATS } from '../data/trustStats';

const TrustStatIcon = ({ svgPath }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
    <path d={svgPath} />
  </svg>
);

const TrustStatCard = ({ value, label, svgPath }) => (
  <li className="card-glass rounded-2xl px-5 py-6 flex flex-col items-center gap-3 text-center">
    <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-btcOrange/10 text-btcOrange">
      <TrustStatIcon svgPath={svgPath} />
    </span>
    <span className="font-poppins font-extrabold text-btcText text-2xl leading-none">{value}</span>
    <span className="text-btcMuted text-xs font-medium leading-snug">{label}</span>
  </li>
);

/**
 * Social-proof bar with glassmorphism stat cards.
 * Data-driven via trustStats.js.
 */
const TrustBar = () => (
  <section
    aria-label="Binance Vertrauensindikatoren"
    className="bg-btcDark py-14 px-5"
  >
    <div className="max-w-4xl mx-auto">
      <p className="text-btcMuted text-xs text-center uppercase tracking-widest mb-8 font-medium">
        Warum Millionen Anleger Binance vertrauen
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 list-none p-0 m-0">
        {TRUST_STATS.map((stat) => (
          <TrustStatCard
            key={stat.id}
            value={stat.value}
            label={stat.label}
            svgPath={stat.svgPath}
          />
        ))}
      </ul>
    </div>
  </section>
);

export default TrustBar;

