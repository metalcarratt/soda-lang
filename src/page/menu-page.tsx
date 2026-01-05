import './page.scss';
import './menu-page.scss';
import { Link } from "./link";
import { useEffect, useState } from "react";
import type { PlaylistLessonType, PlaylistType } from "../playlists/playlist-type";
import { allPlaylists } from "../playlists/load-all-playlists";

const thumbnailRoot = `${import.meta.env.BASE_URL}/lessons`;

export const MenuPage = () => {
  const [playlists, setPlaylists] = useState<PlaylistType[]>([]);

  useEffect(() => {
    (async () => {
      setPlaylists(await allPlaylists());
    })();
  }, []);

  return (
    <div className="page menu">
      <div>
        <h1>Lessons</h1>
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

  const link = `lesson/${lesson.id}/video?playlist=${playlistId}&place=${playlistPlace}`;
  const thumbnailSrc = `${thumbnailRoot}/${lesson.thumbnail}`;

  return <li>
    { lesson &&
      <Link to={link}>
        <img src={thumbnailSrc} />
        <label>{lesson.name}</label>
      </Link>
    }
  </li>;
}