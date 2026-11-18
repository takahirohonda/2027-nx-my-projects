//@ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js options go here
  // See: https://nextjs.org/docs/app/api-reference/config/next-config-js
  output: "export", // `next build` now writes ./out (replaces the old `next export`)
  trailingSlash: true, // emits about/index.html instead of about.html (see routing below)
  images: { unoptimized: true }, // the default next/image optimizer needs a server
};

module.exports = nextConfig;
