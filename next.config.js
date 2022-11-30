/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    BASE_URL:process.env.BASE_URL,
    NEXTAUTH_URL:process.env.NEXTAUTH_URL,
    API_URL:process.env.API_URL,
    JWT_SECRET:process.env.JWT_SECRET,
    WEBSITE_TOKEN:process.env.WEBSITE_TOKEN
  },
  i18n: {
    locales: ['en', 'ar','sw','tkm'],
    defaultLocale: 'en',
  }
}
module.exports = nextConfig
