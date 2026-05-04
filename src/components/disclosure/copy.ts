/**
 * Disclosure copy — single source of truth for affiliate-disclosure strings.
 *
 * Per-vertical ranking criteria string is the only thing that changes
 * between sites in the Valitse network. Everything else is identical.
 */

export type DisclosureSiteConfig = {
  siteName: string;
  rankingCriteria: string;
};

export const SITE_CONFIG: DisclosureSiteConfig = {
  siteName: 'Valitse Vakuutus',
  rankingCriteria: 'hinta + kattavuus + asiakastyytyväisyys',
};

export const DISCLOSURE_COPY = {
  badgePartner: 'Kumppanitarjous',
  badgeMarket: 'Markkinahinta',
  ctaPartner: 'Siirry kumppanin sivulle',
  ctaMarket: 'Siirry tarjoajan sivulle',
  barText: 'Vertailu sisältää kumppanitarjouksia',
  barLinkText: 'näin ansaitsemme rahaa',
  partnerTooltip: (siteName: string) =>
    `Tämä tarjous on ${siteName}:n kaupallinen kumppani. Saamme palkkion solmituista sopimuksista. Järjestys perustuu hintaan ja kattavuuteen, ei palkkioon.`,
  marketTooltip:
    'Tätä yhtiötä ei makseta esiin nostamisesta. Hinta-arvio haetaan julkisista lähteistä — lopullinen hinta selviää yhtiöltä.',
} as const;
