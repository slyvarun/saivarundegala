/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = '';
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';
  if (repoName) {
    repo = `/${repoName}`;
  }
}

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
