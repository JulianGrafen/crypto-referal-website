import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
  </svg>
);

const SIZE_CLASSES = {
  sm: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-10 py-4 text-lg rounded-xl',
};

/**
 * Reusable affiliate CTA button.
 * Always links to the Binance affiliate URL defined in siteConfig.
 */
const CtaButton = ({ label = SITE_CONFIG.affiliate.ctaLabel, size = 'lg', className = '' }) => (
  <a
    href={SITE_CONFIG.affiliate.link}
    target="_blank"
    rel="noopener noreferrer sponsored"
    className={`inline-flex items-center gap-3 bg-btcOrange hover:bg-btcOrangeHover text-white font-bold shadow-lg shadow-btcOrange/20 transition-all duration-200 hover:scale-105 hover:shadow-btcOrange/30 hover:shadow-xl ${SIZE_CLASSES[size]} ${className}`}
    aria-label={`${label} – Binance-Konto erstellen (öffnet in neuem Tab)`}
  >
    {label}
    <ArrowRightIcon />
  </a>
);

export default CtaButton;
