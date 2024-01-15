import '@mantine/core/styles.css'
import '~/styles/globals.css'

import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import { Layout } from '~/components/Layout'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import Script from 'next/script'
import Head from 'next/head'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sk">
      <Head>
        <ColorSchemeScript />
      </Head>
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

        <MantineProvider>
          <Layout>{children}</Layout>
        </MantineProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Own Your Cycle',
  description: 'Menštruačný cyklus je zrkadlom nášho zdravia',
}
