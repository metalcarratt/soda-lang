import './page.scss';
import './menu-page.scss';
import { Link } from "./link";
import type { PlaylistLessonType } from "../playlists/playlist-type";
import { usePlaylists } from "../playlists/load-all-playlists";
import { useData } from '../data/use-data';

const thumbnailRoot = `${import.meta.env.BASE_URL}/lessons`;

export const MenuPage = () => {
  const {playlists, loading} = usePlaylists();

  return (
    <div className="page menu">
      <div>
        <h1>Lessons</h1>
        {(!playlists.length && loading) && <p>Loading...</p>}
        {(!playlists.length && !loading) && <p>Sorry, at the moment this language doesn't currently have any lessons available. Click to <Link target={{lang: ''}}>Choose another language</Link>.</p>}
        {playlists.map(playlist => <>
          <h2>{playlist.name}</h2>
          <ol>
            {playlist.lessons.map((lesson, lessonIterator) => <LessonLink lesson={lesson} playlistId={playlist.id} playlistPlace={lessonIterator} />)}
          </ol>
        </>)}
      </div>
    </div>
  );
}

const LessonLink = ({lesson, playlistId, playlistPlace}: {lesson: PlaylistLessonType, playlistId: string, playlistPlace: number}) => {
  const {lang} = useData();
  
  const target = {
    lang: lang.lang ?? '',
    lessonId: lesson.id,
    subpage: 'video',
    playlistId,
    place: playlistPlace
  }
  const thumbnailSrc = `${thumbnailRoot}/${lesson.thumbnail}`;

  return <li>
    { lesson &&
      <Link target={target}>
        <img src={thumbnailSrc} />
        <label>{lesson.name}</label>
      </Link>
    }
  </li>;
}