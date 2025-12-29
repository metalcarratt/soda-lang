import { allPlaylists, findByPathName, type LessonType, type PlaylistType } from "../lesson/lessons";
import './page.scss';
import { Link } from "./link";
import { useEffect, useState } from "react";

export const MenuPage = () => {
  const [playlists, setPlaylists] = useState<PlaylistType[]>([]);

  useEffect(() => {
    (async () => {
      setPlaylists(await allPlaylists());
    })();
  }, []);

  return (
    <div className="page">
      <div>
        <h1>Lessons</h1>
        {playlists.map(playlist => <>
          <h2>{playlist.name}</h2>
          <ol>
            {playlist.lessons.map(lesson => <LessonLink lesson={findByPathName(lesson)}/>)}
          </ol>
        </>)}
      </div>
    </div>
  );
}

const LessonLink = ({lesson}: {lesson: LessonType}) => {
  return <li>
    <Link to={`lesson/${lesson.pathName}`}>{lesson.name}</Link>
  </li>;
}