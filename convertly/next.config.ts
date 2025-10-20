import type { NextConfig } from "next";

const nextConfig: NextConfig = {

 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ufs.sh', // allows all subdomains like x1i4hkiby1.ufs.sh
      },
      {
        protocol: 'https',
        hostname: 'ufs.sh', // also allow root domain
      },
    ],
  },
};
export default nextConfig;
