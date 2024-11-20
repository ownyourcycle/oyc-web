import '@mantine/core/styles.css'
import '~/styles/globals.css'

import { ColorSchemeScript, MantineProvider } from '@mantine/core'

import { Layout } from '~/components/Layout'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import Script from 'next/script'
import { AnalyticsWrapper } from '~/components/AnalyticsWrapper'

export const metadata = {
  title: 'Own Your Cycle',
  description: 'Menštruačný cyklus je zrkadlom nášho zdravia',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaTrackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string

  return (
    <html lang="sk">
      <body>
        <MantineProvider>
          <Layout>{children}</Layout>
          <AnalyticsWrapper gaTrackingId={gaTrackingId} gtmId={gtmId} />
        </MantineProvider>
      </body>
    </html>
  )
}
