import React, { useState, useRef } from 'react';
import { FAQ_ITEMS } from '../data/faqItems';

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
    <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6 1.41-1.41z" />
  </svg>
);

/**
 * Accordion item with CSS max-height transition – no JS mount/unmount pop.
 * The content div's height animates smoothly on both open and close.
 */
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="card-glass rounded-2xl overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-btcText font-semibold text-left text-sm sm:text-base min-h-[56px] transition-colors duration-150 hover:text-btcOrange"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className={`text-btcMuted flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDownIcon />
        </span>
      </button>

      {/* CSS height transition via max-height */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 400}px` : '0px' }}
      >
        <p className="px-5 pb-5 text-btcMuted text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

/**
 * FAQ accordion section.
 * Matching JSON-LD FAQPage schema lives in public/index.html.
 */
const FaqSection = () => (
  <section
    id="faq"
    className="bg-btcDark py-16 px-5 sm:py-20"
    aria-labelledby="faq-heading"
  >
    <div className="max-w-2xl mx-auto">
      <h2
        id="faq-heading"
        className="font-poppins font-bold text-btcText text-2xl sm:text-4xl text-center mb-3"
      >
        Häufige Fragen
      </h2>
      <p className="text-btcMuted text-center text-sm mb-10 max-w-md mx-auto">
        Die wichtigsten Antworten für Bitcoin-Einsteiger auf einen Blick.
      </p>

      <ul className="space-y-3 list-none p-0 m-0">
        {FAQ_ITEMS.map((item) => (
          <li key={item.id}>
            <FaqItem question={item.question} answer={item.answer} />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default FaqSection;

