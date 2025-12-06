import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  reactCompiler: true,
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: 'github.com',
      },
      {
        hostname: 'spfmpvcaanpxauyvgtty.supabase.co',
      },
    ],
  },
}

export default nextConfig
