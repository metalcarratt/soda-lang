import yaml from 'js-yaml';

export type LessonType = {
  name: string;
  pathName: string;
  video: string;
  transcript?: { speaker: string; lines: string; timing?: number }[];
  vocab?: string[];
};

export type PlaylistType = {
  name: string;
  lessons: string[];
};

type PlaylistTypeIntermediate = {
  name: string;
  lessons: string[];
};

const playlistRoot = `${import.meta.env.BASE_URL}/playlists`;
const lessonsRoot = `${import.meta.env.BASE_URL}/lessons`;

const allLessons: Record<string, LessonType> = {};

const loadPlaylist = async (playlistName: string) => {
  const res = await fetch(`${playlistRoot}/${playlistName}.yml`);
  const text = await res.text();
  const playlist = yaml.load(text) as PlaylistTypeIntermediate;
  return playlist;
};

const loadLessons = async (lessonName: string) => {
  const res1 = await fetch(`${lessonsRoot}/${lessonName}.yml`);
  const text1 = await res1.text();
  const lesson = yaml.load(text1) as LessonType;
  allLessons[lesson.pathName] = lesson;
  return lesson;
};

const loadPl2 = async (playlistName: string): Promise<PlaylistType> => {
  const playlist = await loadPlaylist(playlistName);
  const lessons = [];
  for (const lessonName of playlist.lessons) {
    const lesson = await loadLessons(lessonName);
    lessons.push(lesson.pathName);
  }

  return { ...playlist, lessons };
};

export const allPlaylists = async () => {
  const functionPlaylist = await loadPl2('function-lessons');
  const interviewPlaylist = await loadPl2('interview-lessons');
  const sockSagaPlaylist = await loadPl2('sock-saga-lessons');
  const reporterPlaylist = await loadPl2('reporter-lessons');

  return [
    functionPlaylist,
    interviewPlaylist,
    sockSagaPlaylist,
    reporterPlaylist,
  ];
};

export const findByPathName = (pathName: string) => {
  return allLessons[pathName];
  // for (const playlist of await allPlaylists()) {
  //   const lesson = playlist.lessons.find((item) => item.pathName === pathName);
  //   if (lesson) {
  //     return lesson;
  //   }
  // }
};
