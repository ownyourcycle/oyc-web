'use client'
import { useCookieConsent } from '~/hooks/useCookieConsent'
import { CookieBanner } from '~/components/CookieBanner'
import { useEffect, useState } from 'react'
import Script from 'next/script'

export function AnalyticsWrapper({ gaTrackingId, gtmId }: { gaTrackingId: string; gtmId: string }) {
  const { consent, acceptCookies, rejectCookies } = useCookieConsent()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <>
      {/* Head Scripts */}
      {consent === 'accepted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} strategy="afterInteractive" />
          <Script id="google-analytics-config" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaTrackingId}');
            `}
          </Script>
          <Script id="google-tag-manager-config" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        </>
      )}

      {/* Body Scripts */}
      {consent === 'accepted' && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      )}

      {/* Cookie Banner */}
      {consent === undefined && <CookieBanner onAccept={acceptCookies} onReject={rejectCookies} />}
    </>
  )
}
