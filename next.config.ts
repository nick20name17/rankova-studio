import { type NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    inlineCss: true
  },
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7,
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  }
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
