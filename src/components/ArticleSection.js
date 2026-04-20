import CtaButton from './CtaButton';

/**
 * Renders a single content section from a blog post's sections array.
 * Each section type maps to a distinct visual element.
 * This component is purely presentational – no logic, no state.
 */
export default function ArticleSection({ section }) {
  switch (section.type) {
    case 'h2':
      return (
        <h2 className="text-2xl font-bold text-btcText mt-10 mb-4 leading-snug">
          {section.content}
        </h2>
      );

    case 'h3':
      return (
        <h3 className="text-lg font-semibold text-btcText mt-6 mb-2">
          {section.content}
        </h3>
      );

    case 'paragraph':
      return (
        <p className="text-btcMuted leading-relaxed mb-4">
          {section.content}
        </p>
      );

    case 'bullets':
      return (
        <ul className="list-none space-y-2 mb-6">
          {section.content.map((item, i) => (
            <li key={i} className="flex gap-3 text-btcMuted">
              <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-btcOrange translate-y-[6px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case 'numbered':
      return (
        <ol className="list-none space-y-3 mb-6">
          {section.content.map((item, i) => (
            <li key={i} className="flex gap-3 text-btcMuted">
              <span className="shrink-0 w-5 h-5 rounded-full bg-btcOrange/15 text-btcOrange text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );

    case 'tip':
      return (
        <div className="bg-btcOrange/5 border border-btcOrange/25 rounded-xl p-5 mb-6">
          {section.title && (
            <p className="text-btcOrange font-semibold text-sm mb-1">
              💡 {section.title}
            </p>
          )}
          <p className="text-btcMuted text-sm leading-relaxed">
            {section.content}
          </p>
        </div>
      );

    case 'warning':
      return (
        <div className="bg-amber-500/5 border border-amber-500/25 rounded-xl p-5 mb-6">
          <p className="text-amber-400 font-semibold text-sm mb-1">
            ⚠️ Risikohinweis
          </p>
          <p className="text-btcMuted text-sm leading-relaxed">
            {section.content}
          </p>
        </div>
      );

    case 'cta_binance':
      return (
        <div className="card-glass rounded-2xl p-7 mt-12 border border-btcOrange/20">
          <p className="text-xs font-semibold tracking-widest text-btcOrange uppercase mb-3">
            Empfehlung
          </p>
          <h3 className="text-xl font-bold text-btcText mb-2">
            Bitcoin kaufen auf Binance
          </h3>
          <p className="text-btcMuted text-sm mb-6">
            Die Plattform, die wir nach ausführlichem Vergleich für deutsche Einsteiger und erfahrene Anleger empfehlen. Über unseren Link erhältst du dauerhaft 10 % Gebührenrabatt.
          </p>
          <ol className="list-none space-y-3 mb-7">
            {[
              'Konto erstellen & per Ausweis verifizieren (ca. 5 Min.)',
              'Geld einzahlen – kostenlos per SEPA-Überweisung',
              'Bitcoin kaufen – bereits ab 10 €',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-btcMuted">
                <span className="shrink-0 w-6 h-6 rounded-full bg-btcOrange/15 text-btcOrange text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <CtaButton size="lg" />
          <p className="text-xs text-btcMuted/60 mt-4">
            * Affiliate-Link. Wir erhalten eine Provision ohne Mehrkosten für dich. Diese Empfehlung basiert auf eigenem Vergleich und persönlicher Erfahrung.
          </p>
        </div>
      );

    default:
      return null;
  }
}
