import React from 'react';

/**
 * Resolves static image asset URLs safely across Vite development,
 * preview environments, and production deployments (like Vercel).
 */
export const resolveImageUrl = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('data:') || path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const filename = path.split('/').pop()?.split('?')[0];
  if (!filename) return path;
  return `/assets/images/${filename}`;
};

/**
 * Image onError fallback handler that tries alternative paths
 * (/assets/images/ -> /src/assets/images/ -> /images/)
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const img = e.currentTarget;
  const currentSrc = img.src;
  const filename = currentSrc.split('/').pop()?.split('?')[0];
  if (!filename) return;

  const step = img.dataset.fallbackStep || '0';
  if (step === '0') {
    img.dataset.fallbackStep = '1';
    img.src = `/assets/images/${filename}`;
  } else if (step === '1') {
    img.dataset.fallbackStep = '2';
    img.src = `/src/assets/images/${filename}`;
  } else if (step === '2') {
    img.dataset.fallbackStep = '3';
    img.src = `/images/${filename}`;
  }
};
