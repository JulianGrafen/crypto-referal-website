/**
 * Step-by-step guide data for the Binance Bitcoin purchase guide.
 * Centralised here so the GuideSection component stays presentation-only.
 */
export const GUIDE_STEPS = [
  {
    id: 'schritt-1',
    stepNumber: 1,
    title: 'Kostenloses Binance-Konto erstellen',
    subtitle: 'In 2 Minuten registriert – 100% kostenlos',
    description:
      'Der erste Schritt ist die Erstellung deines Binance-Kontos. Nutze unseren exklusiven Link und sichere dir sofort einen dauerhaften Rabatt von 10% auf alle Handelsgebühren.',
    subSteps: [
      'Klicke auf den orangen Button „Jetzt 10% Rabatt sichern" auf dieser Seite.',
      'Gib deine E-Mail-Adresse ein und wähle ein sicheres Passwort (mind. 8 Zeichen, Zahlen & Sonderzeichen).',
      'Klicke auf „Registrieren" – Binance schickt dir sofort eine Bestätigungs-E-Mail.',
      'Öffne die E-Mail von Binance und klicke auf den Bestätigungslink, um das Konto zu aktivieren.',
    ],
    proTip:
      'Nutze unbedingt unseren Registrierungslink – der 10% Rabatt wird automatisch aktiviert und gilt dauerhaft für alle deine Trades.',
    hasCta: false,
  },
  {
    id: 'schritt-2',
    stepNumber: 2,
    title: 'Identität verifizieren (KYC)',
    subtitle: 'Gesetzlich vorgeschrieben & in unter 10 Minuten erledigt',
    description:
      'Die Identitätsprüfung ist gesetzlich vorgeschrieben und schützt dein Konto. Sie schaltet außerdem deutlich höhere Handelslimits frei. Du benötigst nur deinen Ausweis und eine Kamera.',
    subSteps: [
      'Melde dich bei Binance an und klicke oben rechts auf dein Profilbild.',
      'Wähle „Identitätsverifizierung" → „Jetzt verifizieren".',
      'Wähle dein Land und deinen Ausweistyp (Personalausweis oder Reisepass).',
      'Lade ein Foto deines Ausweises hoch (Vorder- und Rückseite).',
      'Mache ein Selfie über die Kamera – die KI-gestützte Gesichtserkennung dauert unter 5 Minuten.',
    ],
    proTip:
      'Achte auf gute Beleuchtung beim Selfie und stelle sicher, dass dein Ausweis noch mindestens 3 Monate gültig ist.',
    hasCta: false,
  },
  {
    id: 'schritt-3',
    stepNumber: 3,
    title: 'Geld einzahlen (SEPA oder Kreditkarte)',
    subtitle: 'Kostenlos per SEPA oder sofort per Kreditkarte',
    description:
      'Nach erfolgreicher Verifizierung kannst du EUR auf dein Konto einzahlen. Wähle je nach Dringlichkeit zwischen der kostenlosen SEPA-Überweisung oder der sofortigen Kreditkartenzahlung.',
    subSteps: [
      'Klicke in der oberen Menüleiste auf „Kaufen & Verkaufen" oder navigiere zu „Guthaben" → „Einzahlen".',
      'Wähle als Währung „EUR".',
      'SEPA-Überweisung (empfohlen): Kostenlos, Laufzeit 1–2 Werktage – überweise den Betrag an die angezeigte Binance-IBAN.',
      'Kreditkarte (sofort): Gib deine Kartendaten ein und bestätige. Das Guthaben ist innerhalb von Minuten verfügbar (ca. 1,8% Gebühr).',
    ],
    proTip:
      'Für Einsteiger empfehlen wir SEPA-Überweisungen – sie sind kostenlos und absolut zuverlässig.',
    hasCta: false,
  },
  {
    id: 'schritt-4',
    stepNumber: 4,
    title: 'Bitcoin kaufen',
    subtitle: 'Mit wenigen Klicks zum ersten Bitcoin – ab 10€ möglich',
    description:
      'Jetzt der eigentliche Moment: Du kaufst dein erstes Bitcoin. Der Prozess ist intuitiv und dauert nicht länger als 2 Minuten. Bitcoin ist teilbar – du musst keinen ganzen Bitcoin kaufen.',
    subSteps: [
      'Klicke auf „Kaufen & Verkaufen" im Hauptmenü und wähle „Krypto kaufen".',
      'Wähle im Dropdown-Menü „BTC" (Bitcoin) als Kryptowährung.',
      'Gib den EUR-Betrag ein, den du investieren möchtest (z. B. 50 €).',
      'Überprüfe den angezeigten BTC-Betrag, den Wechselkurs und die Gebühren.',
      'Klicke auf „Bitcoin kaufen" und bestätige den Kauf – fertig!',
    ],
    proTip:
      'Deine Bitcoin erscheinen sofort in deinem Binance-Wallet. Fange ruhig mit einem kleinen Betrag an und erhöhe ihn, wenn du dich sicherer fühlst.',
    hasCta: true,
  },
];
