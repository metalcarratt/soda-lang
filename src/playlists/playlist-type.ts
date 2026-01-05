export type PlaylistLessonType = {
  name: string;
  thumbnail: string;
  id: string;
};

export type PlaylistType = {
  name: string;
  id: string;
  lessons: PlaylistLessonType[];
};
