import React, { useEffect, useState } from 'react';
import CtaButton from './CtaButton';
import { SITE_CONFIG } from '../data/siteConfig';

/**
 * Sticky bottom CTA bar – visible only on mobile (hidden on sm+).
 * Appears after the user scrolls 300px down the page.
 * Keeps the primary affiliate CTA always in thumb reach on mobile.
 */
const MobileCtaBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 300;

    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sm:hidden fixed bottom-0 inset-x-0 z-50 px-4 pb-safe-area-inset-bottom transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!isVisible}
    >
      {/* Gradient fade so it blends into the page above */}
      <div className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-t from-btcDark to-transparent pointer-events-none" aria-hidden="true" />

      <div className="bg-btcSurface border-t border-btcBorder px-4 py-4 flex flex-col items-stretch gap-2">
        <CtaButton
          label={SITE_CONFIG.affiliate.ctaLabel}
          size="sm"
          className="w-full justify-center !text-base !py-4"
        />
        <p className="text-center text-btcMuted text-xs">
          Kostenlos · Kein Mindesteinsatz
        </p>
      </div>
    </div>
  );
};

export default MobileCtaBar;
