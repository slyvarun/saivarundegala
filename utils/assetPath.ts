/**
 * Utility to resolve static asset paths correctly across both local dev and GitHub Pages base paths.
 * Automatically detects '/saivarundegala' subpath on GitHub Pages.
 */
export function getAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // 1. Check process.env.NEXT_PUBLIC_BASE_PATH
  let basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // 2. Client-side runtime check for GitHub Pages subpath (/saivarundegala)
  if (!basePath && typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/saivarundegala')) {
      basePath = '/saivarundegala';
    }
  }

  // Prevent double prefixing
  if (basePath && cleanPath.startsWith(basePath)) {
    return cleanPath;
  }

  return `${basePath}${cleanPath}`;
}
