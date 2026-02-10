import { useEffect, useState } from 'react';
import { loadPlaylist } from './load-playlist';
import type { PlaylistType } from './playlist-type';
import { useData } from '../data/use-data';
import { EN_DU, EN_KR, EN_MA, EN_ZH } from '../language/languages';

export const allPlaylists = async (lang: string) => {
  if (lang === EN_KR) {
    const functionPlaylist = await loadPlaylist('function-lessons');
    const interviewPlaylist = await loadPlaylist('interview-lessons');
    const sockSagaPlaylist = await loadPlaylist('sock-saga-lessons');
    const reporterPlaylist = await loadPlaylist('reporter-lessons');

    return [
      functionPlaylist,
      interviewPlaylist,
      sockSagaPlaylist,
      reporterPlaylist,
    ];
  } else if (lang === EN_MA) {
    const playlist1 = await loadPlaylist('maori-beginning');
    return [playlist1];
  } else if (lang === EN_DU) {
    const playlist1 = await loadPlaylist('dutch-example');
    return [playlist1];
  } else if (lang === EN_ZH) {
    const playlist1 = await loadPlaylist('chinese-beginning');
    return [playlist1];
  } else {
    return [];
  }
};

export const usePlaylists = () => {
  const [playlists, setPlaylists] = useState<PlaylistType[]>([]);
  const [loading, setLoading] = useState(true);
  const { lang } = useData();

  useEffect(() => {
    (async () => {
      setPlaylists(await allPlaylists(lang.lang ?? ''));
      setLoading(false);
    })();
  }, []);

  return { playlists, loading };
};
