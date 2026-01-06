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

  const pathParts = parsePath(path);

  return { path, pathParts, navigate };
}

const parsePath = (path: string) => {
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

  const params = new URLSearchParams(window.location.search);
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
