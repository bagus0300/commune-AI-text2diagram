/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      // {
      //   source: '/api/:path*',
      //   destination: process.env.BACKEND_URL + '/api/:path*'
      // },
    ]
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
}

module.exports = nextConfig
