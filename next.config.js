/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/prescon-technology',
        destination: '/prescon-technology/post-tensioning',
        permanent: true
      },
      {
        source: '/projects',
        destination: '/projects/post-tensioning',
        permanent: true
      },
      {
        source: '/properties',
        destination: '/properties/residential',
        permanent: true
      }
    ]
  },
  images: {
    domains: ['umbra-digital.sgp1.digitaloceanspaces.com']
  }
}

module.exports = nextConfig
