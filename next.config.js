/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: {
    export: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: { externalDir: true },
};

module.exports = nextConfig;


// output: {
//     export: true,
//   },