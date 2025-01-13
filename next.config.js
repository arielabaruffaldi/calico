/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'], // Idiomas que tu app soporta
    defaultLocale: 'en',    // Idioma por defecto
    localeDetection: false, // Para evitar que Next.js detecte el idioma automáticamente
  },
}

module.exports = nextConfig
