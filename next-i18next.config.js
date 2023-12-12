/**
 * @type {import('next-i18next').UserConfig}
 */

module.exports = {
  debug: false,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: false
  },
  trailingSlash: true,
  fallbackLng: {
    default: ["en"],
  },
};
