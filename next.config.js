/** @type {import('next').NextConfig} */
const nextConfig = {
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       'hero-pattern': "url('/public/images/bg.jpg')",
  //     },
  //   },
  // },
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
