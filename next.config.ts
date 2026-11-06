import type { NextConfig } from 'next';

const wordpressApiUrl = process.env.WORDPRESS_API_URL;
const wordpressImageUrl = wordpressApiUrl ? new URL(wordpressApiUrl) : undefined;

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    qualities: [25, 50, 75, 100],
    remotePatterns: [
      ...(wordpressImageUrl
        ? [
            {
              protocol: wordpressImageUrl.protocol === 'https:' ? ('https' as const) : ('http' as const),
              hostname: wordpressImageUrl.hostname,
              ...(wordpressImageUrl.port ? { port: wordpressImageUrl.port } : {}),
            },
          ]
        : []),
      { protocol: 'https', hostname: 'www.olympicmgmt.com' },
    ],
  },
};

export default nextConfig;