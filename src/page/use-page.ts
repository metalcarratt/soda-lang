import { useState } from 'react';

type PageType =
  | 'course-menu'
  | 'lesson-menu'
  | 'video'
  | 'transcript'
  | 'vocab';

export const usePage = () => {
  const [page, setPage] = useState<PageType>('course-menu');

  return { page, setPage };
};
