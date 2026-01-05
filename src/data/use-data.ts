import { useEffect } from 'react';
import { useLesson } from '../lesson/use-lesson';
import { usePanel, type PanelType } from '../page/use-panel';
import { useVideo } from '../video/use-video';
import { usePath } from '../page/use-path';
import { findLessonById } from '../lesson/lessons';
import { useWords } from '../words/use-words';

export const useData = () => {
  const lessons = useLesson();
  const video = useVideo(lessons.lesson);
  const panel = usePanel();
  const words = useWords();

  const { path, pathParts } = usePath();

  useEffect(() => {
    (async () => {
      if (pathParts.page === 'lesson' && pathParts.lesson) {
        console.log('path changed, lesson', pathParts.lesson);
        const lesson = await findLessonById(pathParts.lesson);
        if (lesson) {
          lessons.setLesson(lesson);
          console.log('video', lesson);
          video.newVideo(lesson.video);

          if (pathParts.subpage) {
            console.log('set panel to', pathParts.subpage);
            panel.setPanel(pathParts.subpage as PanelType);
          } else {
            panel.setPanel('menu');
          }
        }
      }
    })();
  }, [path]);

  return {
    video,
    lessons,
    lesson: lessons.lesson,
    vocab: lessons.lesson?.vocab,
    panel,
    words,
    pathParts,
  };
};

export type UseDataType = ReturnType<typeof useData>;
