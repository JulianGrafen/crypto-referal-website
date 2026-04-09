import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faqItems';

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6 1.41-1.41z" />
  </svg>
);

/**
 * A single accordion item for the FAQ section.
 * Manages its own open/closed state (KISS principle – no shared state needed).
 */
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-btcBorder rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-btcText font-semibold text-left hover:bg-btcCard transition-colors duration-150"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span
          className={`text-btcMuted flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        >
          <ChevronDownIcon />
        </span>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 text-btcMuted leading-relaxed text-sm sm:text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

/**
 * FAQ section rendered from centralised faqItems.js data.
 * The matching JSON-LD FAQPage schema lives in public/index.html.
 */
const FaqSection = () => (
  <section
    id="faq"
    className="bg-btcDark py-20 px-4"
    aria-labelledby="faq-heading"
  >
    <div className="max-w-3xl mx-auto">
      <h2
        id="faq-heading"
        className="font-poppins font-bold text-btcText text-3xl sm:text-4xl text-center mb-4"
      >
        Häufig gestellte Fragen
      </h2>
      <p className="text-btcMuted text-center mb-12 max-w-xl mx-auto">
        Alles, was Einsteiger über den Bitcoin-Kauf auf Binance wissen müssen.
      </p>

      <div className="space-y-3" role="list">
        {FAQ_ITEMS.map((item) => (
          <div key={item.id} role="listitem">
            <FaqItem question={item.question} answer={item.answer} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FaqSection;
