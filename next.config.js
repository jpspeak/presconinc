/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/prescon-technology',
        destination: '/prescon-technology/post-tensioning',
        permanent: true
      }
    ]
  },
  images: {
    domains: ['umbra-digital.sgp1.digitaloceanspaces.com', 'localhost']
  }
}

module.exports = nextConfig
