'use client'

import Script from 'next/script'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-KS4VKK3Q98'
const CONSENT_KEY = 'valitsevakuutus-cookie-consent'

export default function GoogleAnalytics() {

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });
          gtag('config', '${GA_ID}');

          // Restore consent from previous session
          try {
            var stored = localStorage.getItem('${CONSENT_KEY}');
            if (stored) {
              var consent = JSON.parse(stored);
              gtag('consent', 'update', {
                'analytics_storage': consent.analytics ? 'granted' : 'denied',
                'ad_storage': consent.marketing ? 'granted' : 'denied',
                'ad_user_data': consent.marketing ? 'granted' : 'denied',
                'ad_personalization': consent.marketing ? 'granted' : 'denied'
              });
            }
          } catch(e) {}
        `}
      </Script>
    </>
  )
}
