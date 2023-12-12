/** @type {import('next').NextConfig} */
const { withTranslation } = require('next-i18next');
const nextConfig = {
    // rewrites: async () => nextI18NextRewrites(),
}

module.exports = withTranslation();
