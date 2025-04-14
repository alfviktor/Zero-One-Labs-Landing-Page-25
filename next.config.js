/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'))
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] })

    return config
  },
}
