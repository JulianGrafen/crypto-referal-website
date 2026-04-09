import React from 'react';
import { GUIDE_STEPS } from '../data/guideSteps';
import CtaButton from './CtaButton';

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm.01 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

const LightBulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
  </svg>
);

const SubStep = ({ text }) => (
  <li className="flex items-start gap-3 text-btcMuted text-sm leading-relaxed min-h-[44px]">
    <span className="text-btcGreen mt-1 flex-shrink-0"><CheckIcon /></span>
    <span>{text}</span>
  </li>
);

const ProTip = ({ text }) => (
  <div className="flex items-start gap-3 mt-5 bg-btcOrange/5 border border-btcOrange/20 rounded-xl px-4 py-3">
    <span className="text-btcOrange mt-0.5 flex-shrink-0"><LightBulbIcon /></span>
    <p className="text-btcMuted text-sm leading-relaxed">
      <strong className="text-btcText font-semibold">Tipp: </strong>{text}
    </p>
  </div>
);

/**
 * A single step card.
 * Large emoji circle + clear title + ≤3 sub-steps + pro tip.
 * Fully tappable on mobile (min 44px touch targets throughout).
 */
const GuideStepCard = ({ step, isLast }) => (
  <article
    id={step.id}
    className="relative flex gap-5 scroll-mt-24"
    aria-labelledby={`${step.id}-title`}
  >
    {/* Left column: emoji circle + vertical connector line */}
    <div className="flex flex-col items-center flex-shrink-0">
      <div
        className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-orange text-2xl shadow-lg shadow-btcOrange/20 select-none"
        aria-hidden="true"
        role="img"
      >
        {step.emoji}
      </div>
      {!isLast && (
        <div className="w-px flex-1 mt-3 bg-btcBorder" aria-hidden="true" />
      )}
    </div>

    {/* Right column: card content */}
    <div className="card-glass rounded-2xl p-5 sm:p-6 mb-6 w-full">

      {/* Step number + duration */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-btcOrange text-xs font-bold uppercase tracking-wider">
          Schritt {step.stepNumber}
        </span>
        <span className="flex items-center gap-1 text-btcMuted text-xs">
          <ClockIcon />
          {step.duration}
        </span>
      </div>

      {/* Title */}
      <h3
        id={`${step.id}-title`}
        className="font-poppins font-bold text-btcText text-lg sm:text-xl mb-1"
      >
        {step.title}
      </h3>
      <p className="text-btcMuted text-xs font-medium mb-4">{step.tagline}</p>

      <p className="text-btcMuted text-sm leading-relaxed mb-5">{step.description}</p>

      <ol className="space-y-1 list-none p-0 m-0">
        {step.subSteps.map((text) => <SubStep key={text} text={text} />)}
      </ol>

      <ProTip text={step.proTip} />

      {/* CTA on step 4 only */}
      {step.hasCta && (
        <div className="mt-7 text-center">
          <CtaButton label="Jetzt Bitcoin kaufen – 10 % Rabatt" className="w-full justify-center ss:w-auto ss:justify-start" />
          <p className="mt-3 text-btcMuted text-xs">Kostenlos · Kein Mindesteinsatz · Sofort startklar</p>
        </div>
      )}
    </div>
  </article>
);

/**
 * Full HowTo guide section.
 * Left emoji column + right card layout works on both mobile (stacked) and desktop.
 */
const GuideSection = () => (
  <section
    id="anleitung"
    className="bg-btcDark py-16 px-5 sm:py-20"
    aria-labelledby="guide-heading"
  >
    <div className="max-w-2xl mx-auto">

      <h2
        id="guide-heading"
        className="font-poppins font-bold text-btcText text-2xl sm:text-4xl text-center mb-3"
      >
        In 4 Schritten zu deinem{' '}
        <span className="text-gradient-orange">ersten Bitcoin</span>
      </h2>
      <p className="text-btcMuted text-center text-sm sm:text-base mb-12 max-w-md mx-auto">
        Einfach erklärt – du benötigst nur eine E-Mail-Adresse, einen Ausweis und ein Bankkonto.
      </p>

      <div className="space-y-0">
        {GUIDE_STEPS.map((step, index) => (
          <GuideStepCard
            key={step.id}
            step={step}
            isLast={index === GUIDE_STEPS.length - 1}
          />
        ))}
      </div>

    </div>
  </section>
);

export default GuideSection;
