// hooks/usePath.ts
import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
}

function getSnapshot() {
  return window.location.pathname;
}

export function usePath() {
  const path = useSyncExternalStore(subscribe, getSnapshot);

  const navigate = (newPath: string) => {
    if (newPath !== window.location.pathname) {
      window.history.pushState({}, '', newPath);
      window.dispatchEvent(new PopStateEvent('popstate')); // force sync update
    }
  };

  const pathParts = parsePath(path, navigate);

  return { path, pathParts, navigate };
}

const parsePath = (path: string, navigate: (path: string) => void) => {
  const params = new URLSearchParams(window.location.search);

  // If redirected from 404.html, use the real path
  const redirect = params.get('redirect');
  if (redirect) {
    navigate(redirect);
    // return;
    throw new Error('Redirecting'); // return type becomes `never`
  }

  const segments = path.split('/').filter(Boolean);

  let lang = segments[1];
  let page = segments[2];
  let lesson;
  let subpage;

  if (page === 'lesson') {
    lesson = segments[3];
    subpage = segments[4];
  } else {
    page = 'menu';
  }

  const playlist = params.get('playlist') || undefined;
  const place = (params.get('place') as unknown as number) || undefined;

  return {
    lang,
    page,
    lesson,
    subpage,
    playlist,
    place,
  };
};
