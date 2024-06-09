/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
	RESP_COLOR: process.env.RESP_COLOR || '#e2e2e2',
	CREATE_TEAM_LAST_DATE: process.env.CREATE_TEAM_LAST_DATE || '2099-12-31',
  },
}

module.exports = nextConfig
