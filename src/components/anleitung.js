import React from 'react';
import { GUIDE_STEPS } from '../data/guideSteps';
import CtaButton from './CtaButton';

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

const LightBulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true">
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
  </svg>
);

const StepSubItem = ({ text }) => (
  <li className="flex items-start gap-3 text-btcMuted text-sm sm:text-base leading-relaxed">
    <span className="text-btcGreen mt-0.5">
      <CheckIcon />
    </span>
    <span>{text}</span>
  </li>
);

const ProTip = ({ text }) => (
  <div className="flex items-start gap-3 mt-6 bg-btcCard border border-btcBorder rounded-lg px-4 py-3">
    <span className="text-btcOrange">
      <LightBulbIcon />
    </span>
    <p className="text-btcMuted text-sm leading-relaxed">
      <strong className="text-btcText font-semibold">Pro-Tipp: </strong>
      {text}
    </p>
  </div>
);

/**
 * A single step card in the HowTo guide.
 * `article` uses semantic HTML, anchored by `id` for JSON-LD step URLs.
 */
const GuideStepCard = ({ step }) => (
  <article
    id={step.id}
    className="relative bg-btcCard border border-btcBorder rounded-2xl p-6 sm:p-8 scroll-mt-24"
    aria-labelledby={`${step.id}-title`}
  >
    {/* Step number badge */}
    <div
      className="absolute -top-4 left-6 sm:left-8 flex items-center justify-center w-8 h-8 rounded-full bg-btcOrange text-white font-bold text-sm"
      aria-hidden="true"
    >
      {step.stepNumber}
    </div>

    {/* H3 heading: long-tail keyword embedded naturally */}
    <h3
      id={`${step.id}-title`}
      className="font-poppins font-bold text-btcText text-xl sm:text-2xl mt-2 mb-1"
    >
      {step.title}
    </h3>
    <p className="text-btcOrange text-sm font-medium mb-4">{step.subtitle}</p>

    <p className="text-btcMuted mb-6 leading-relaxed">{step.description}</p>

    <ol className="space-y-3 list-none p-0 m-0">
      {step.subSteps.map((subStep) => (
        <StepSubItem key={subStep} text={subStep} />
      ))}
    </ol>

    <ProTip text={step.proTip} />

    {/* CTA only on the final step */}
    {step.hasCta && (
      <div className="mt-8 text-center">
        <CtaButton label="Jetzt Bitcoin kaufen – 10% Rabatt" />
        <p className="mt-3 text-btcMuted text-xs">
          Kostenlos · Kein Mindesteinsatz · Sofort startklar
        </p>
      </div>
    )}
  </article>
);

/**
 * Full HowTo guide section.
 * H2 targets the secondary keyword cluster "Bitcoin kaufen Anleitung Schritt für Schritt".
 * Data-driven via guideSteps.js – no hard-coded step content here (DRY principle).
 */
const GuideSection = () => (
  <section
    id="anleitung"
    className="bg-btcSurface py-20 px-4"
    aria-labelledby="guide-heading"
  >
    <div className="max-w-3xl mx-auto">

      {/* ── H2: Section heading ── */}
      <h2
        id="guide-heading"
        className="font-poppins font-bold text-btcText text-3xl sm:text-4xl text-center mb-4"
      >
        Bitcoin auf Binance kaufen –
        <br className="hidden sm:block" />
        {' '}Schritt für Schritt erklärt
      </h2>
      <p className="text-btcMuted text-center mb-16 max-w-xl mx-auto">
        Diese Anleitung führt dich vollständig durch den Prozess – von der Registrierung
        bis zum fertigen Kauf. Dauer: ca. 15 Minuten.
      </p>

      {/* Vertical connector line on desktop */}
      <div className="relative space-y-12">
        <div
          className="absolute left-[1.85rem] top-4 bottom-4 w-px bg-btcBorder hidden sm:block"
          aria-hidden="true"
        />
        {GUIDE_STEPS.map((step) => (
          <GuideStepCard key={step.id} step={step} />
        ))}
      </div>

    </div>
  </section>
);

export default GuideSection;
