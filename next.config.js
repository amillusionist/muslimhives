/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
    output: 'export',
    images: {
      unoptimized: true,
      remotePatterns: [
          {
              protocol: 'https',
              hostname: '**',
              port: '',
              pathname: '**',
          },
      ],
  },
};

export default nextConfig;
