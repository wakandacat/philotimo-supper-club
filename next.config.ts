import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

//wrap the config in the next-intl plugin to enable internationalization support
const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
