/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { webpack }) => {
    return config
  }
}

// const withImages = require('next-images')
// module.exports = withImages({
//   webpack(config, options) {
//     return config
//   }
// })

module.exports = nextConfig