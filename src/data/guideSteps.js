/**
 * Step-by-step guide data for the Binance Bitcoin purchase guide.
 * Copy is intentionally short and beginner-friendly.
 * Centralised here so the GuideSection component stays presentation-only.
 */
export const GUIDE_STEPS = [
  {
    id: 'schritt-1',
    stepNumber: 1,
    emoji: '📧',
    title: 'Konto erstellen',
    duration: '2 Min.',
    tagline: '100 % kostenlos · kein Mindestbetrag',
    description: 'Registriere dich über unseren Link – so sicherst du dir automatisch 10 % dauerhaften Rabatt auf alle Handelsgebühren.',
    subSteps: [
      'Klick auf „Jetzt 10 % Rabatt sichern" weiter unten.',
      'Gib deine E-Mail-Adresse und ein sicheres Passwort ein.',
      'Bestätige deine E-Mail – fertig! Das Konto ist aktiv.',
    ],
    proTip: 'Nutze unbedingt unseren Link – der Rabatt wird automatisch auf deinem Konto aktiviert.',
    hasCta: false,
  },
  {
    id: 'schritt-2',
    stepNumber: 2,
    emoji: '🪪',
    title: 'Ausweis verifizieren',
    duration: '5–10 Min.',
    tagline: 'Gesetzlich vorgeschrieben · schützt dein Konto',
    description: 'Binance ist reguliert und muss alle Nutzer einmalig identifizieren. Du brauchst nur deinen Personalausweis oder Reisepass.',
    subSteps: [
      'Klick oben rechts auf dein Profilbild → „Identitätsverifizierung".',
      'Lade ein Foto deines Ausweises (Vorder- & Rückseite) hoch.',
      'Mache ein kurzes Selfie – die KI prüft alles automatisch.',
    ],
    proTip: 'Gute Beleuchtung beim Selfie spart Zeit – ein zweiter Versuch ist selten nötig.',
    hasCta: false,
  },
  {
    id: 'schritt-3',
    stepNumber: 3,
    emoji: '💶',
    title: 'Geld einzahlen',
    duration: '1–2 Werktage (SEPA)',
    tagline: 'SEPA kostenlos · Kreditkarte sofort verfügbar',
    description: 'Lade dein Konto mit Euro auf. SEPA-Überweisungen sind vollständig kostenlos und sicher. Für sofortigen Kauf nimm die Kreditkarte.',
    subSteps: [
      'Gehe zu „Kaufen & Verkaufen" → „Einzahlen" → Währung: EUR.',
      'SEPA: Überweise an die angezeigte Binance-IBAN (0 € Gebühren).',
      'Kreditkarte: Kartendaten eingeben – Guthaben in Minuten verfügbar.',
    ],
    proTip: 'Einsteiger-Empfehlung: SEPA-Überweisung. Kostenlos, sicher, funktioniert immer.',
    hasCta: false,
  },
  {
    id: 'schritt-4',
    stepNumber: 4,
    emoji: '₿',
    title: 'Bitcoin kaufen',
    duration: '2 Min.',
    tagline: 'Ab 10 € · sofort in deinem Wallet',
    description: 'Jetzt der eigentliche Kauf – einfacher als Online-Shopping. Du musst keinen ganzen Bitcoin kaufen, schon 10 € reichen.',
    subSteps: [
      'Klick auf „Krypto kaufen" und wähle Bitcoin (BTC).',
      'Gib den Euro-Betrag ein, den du investieren möchtest.',
      'Bestätige den Kauf – deine Bitcoin sind sofort verfügbar.',
    ],
    proTip: 'Fang klein an. Du kannst jederzeit mehr kaufen, wenn du dich sicher fühlst.',
    hasCta: true,
  },
];
