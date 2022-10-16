/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // experimental: {
  //   standalone: true,
  // },
  // swcMinify: true,
  images: {
    domains: ["flowbite.com",]
  }
}

module.exports = nextConfig
