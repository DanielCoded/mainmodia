/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    images: {
      domains: ["images.unsplash.com", "v0.blob.com", "cdn.prod.website-files.com", "photos.zillowstatic.com"],
    },
  }
  
  module.exports = nextConfig
  
  