import '../styles/main.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/Layout'
import { GoogleAnalytics } from 'nextjs-google-analytics'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
