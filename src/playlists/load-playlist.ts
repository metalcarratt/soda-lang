import yaml from 'js-yaml';
import type { PlaylistType } from './playlist-type';

const playlistRoot = `${import.meta.env.BASE_URL}/playlists`;

export const loadPlaylist = async (playlistName: string) => {
  const res = await fetch(`${playlistRoot}/${playlistName}.yml`);
  const text = await res.text();
  const playlist = yaml.load(text) as PlaylistType;
  const lessons = playlist.lessons.map((lesson) => ({
    ...lesson,
    thumbnail: `${lesson.id}-thumb.png`,
  }));
  return { name: playlist.name, id: playlistName, lessons };
};
