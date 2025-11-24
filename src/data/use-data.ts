import { useEffect } from 'react';
import { useLesson } from '../lesson/use-lesson';
import { usePanel, type PanelType } from '../page/use-panel';
import { useVideo } from '../video/use-video';
import { usePath } from '../page/use-path';
import { findByPathName } from '../lesson/lessons';
import { useMenu } from '../menu/use-menu';

export const useData = () => {
  const video = useVideo();
  const lessons = useLesson();
  const panel = usePanel();
  const menu = useMenu();

  const { path, pathParts } = usePath();

  useEffect(() => {
    if (pathParts.page === 'lesson' && pathParts.lesson) {
      console.log('path changed');
      const lesson = findByPathName(pathParts.lesson);
      if (lesson) {
        lessons.setLesson(lesson);
        video.newVideo(lesson.video);

        if (pathParts.subpage) {
          console.log('set panel to', pathParts.subpage);
          panel.setPanel(pathParts.subpage as PanelType);
        } else {
          panel.setPanel('menu');
        }
      }
    }
  }, [path]);

  return {
    video,
    lessons,
    lesson: lessons.lesson,
    vocab: lessons.lesson?.vocab,
    panel,
    menu,
  };
};

export type UseDataType = ReturnType<typeof useData>;
