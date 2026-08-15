/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

// GitHub repository name subpath for GitHub Pages deployment
const repo = isGithubActions ? '/saivarundegala' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: repo,
  assetPrefix: repo,
  env: {
    NEXT_PUBLIC_BASE_PATH: repo,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
