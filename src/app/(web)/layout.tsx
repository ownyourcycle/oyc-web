import '~/styles/globals.css'
import { Layout } from '~/components/Layout'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <body>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env!.GA_MEASUREMENT_ID}`} />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env!.GA_MEASUREMENT_ID}');
        `}
        </Script>

        <Layout>{children}</Layout>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Own Your Cycle',
  description: 'Menštruačný cyklus je zrkadlom nášho zdravia',
}
