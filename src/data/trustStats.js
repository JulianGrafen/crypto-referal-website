/**
 * Social-proof statistics displayed in the TrustBar component.
 * SVG path data is included here to avoid a separate icon library dependency.
 */
export const TRUST_STATS = [
  {
    id: 'users',
    value: '185 Mio.',
    label: 'Verifizierte Nutzer',
    // Material Design "people" icon path
    svgPath:
      'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
  },
  {
    id: 'ranking',
    value: 'Nr. 1',
    label: 'Kryptobörse weltweit',
    // Material Design "emoji_events" (trophy) icon path
    svgPath:
      'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z',
  },
  {
    id: 'fees',
    value: '0,10 %',
    label: 'Niedrige Handelsgebühr',
    // Material Design "percent" icon path
    svgPath:
      'M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11zm0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6zM4.0 20h2L20 4h-2L4 20zm12.5 0C18.43 20 20 18.43 20 16.5S18.43 13 16.5 13 13 14.57 13 16.5 14.57 20 16.5 20zm0-5c.83 0 1.5.67 1.5 1.5S17.33 18 16.5 18 15 17.33 15 16.5s.67-1.5 1.5-1.5z',
  },
  {
    id: 'founded',
    value: 'Seit 2017',
    label: 'Erfahrung & Vertrauen',
    // Material Design "verified_user" / shield icon path
    svgPath:
      'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
  },
];
