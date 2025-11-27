import { type NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  // reactCompiler: true,
  experimental: {
    inlineCss: true
  },
  turbopack: {
    resolveAlias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      util: 'util',
      buffer: 'buffer'
    }
  },
  transpilePackages: ['next-intl', '@sanity/image-url', 'sonner', 'embla-carousel-react'],
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
