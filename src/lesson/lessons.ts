import yaml from 'js-yaml';

export type LessonType = {
  name: string;
  pathName: string;
  video: string;
  transcript?: {
    speaker: string;
    lines: string;
    timing?: number;
    tn?: string;
  }[];
  vocab?: string[];
};

const lessonsRoot = `${import.meta.env.BASE_URL}/lessons`;

const loadLesson = async (lessonName: string) => {
  // console.log('loading lesson', lessonName);
  const res1 = await fetch(`${lessonsRoot}/${lessonName}.yml`);
  const text1 = await res1.text();
  // console.log('text1', text1);
  const lesson = yaml.load(text1) as LessonType;
  lesson.pathName = lessonName;
  return lesson;
};

export const findLessonById = async (lessonId: string) => {
  return await loadLesson(lessonId);
};
