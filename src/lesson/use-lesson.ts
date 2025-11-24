import { useState } from 'react';
import type { LessonType } from './lessons';

export const useLesson = () => {
  const [lesson, setLesson] = useState<LessonType | undefined>();

  return {
    lesson,
    setLesson,
  };
};

export type UseLessonType = ReturnType<typeof useLesson>;
