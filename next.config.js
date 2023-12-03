/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: { externalDir: true },
};

module.exports = nextConfig;


// output: {
//     export: true,
//   },