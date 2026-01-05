import { loadPlaylist } from './load-playlist';

export const allPlaylists = async () => {
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
};
