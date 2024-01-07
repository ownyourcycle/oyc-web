/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/konzultacie',
        destination: '/konzultacia',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        hostname: 'bit.ly',
      },
    ],
  },
}

module.exports = nextConfig
