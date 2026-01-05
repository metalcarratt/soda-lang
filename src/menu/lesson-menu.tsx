import { useEffect, useState } from "react";
import { useDataContext } from "../data/use-data-context";
import { Link } from "../page/link";
import { loadPlaylist } from "../playlists/load-playlist";
import './menu.scss';

export const LessonMenu = () => {
  const {lesson, pathParts} = useDataContext();
  const [nextLink, setNextLink] = useState<string>();
  const [prevLink, setPrevLink] = useState<string>();

  const menuLink = (subpath: string, text: string) => {
    let queryString = '';
    if (pathParts.playlist && pathParts.place) {
      queryString = `?playlist=${pathParts.playlist}&place=${pathParts.place}`;
    }
    return <Link to={`lesson/${lesson?.pathName}/${subpath}${queryString}`}>{text}</Link>
  }

  useEffect(() => {
    (async () => {
      if (pathParts.playlist && pathParts.place) {
        const playlist = await loadPlaylist(pathParts.playlist);

        if (playlist.lessons.length > (Number(pathParts.place) + 1)) {
          const place = Number(pathParts.place) + 1;
          const lessonId = playlist.lessons[place].id;
          setNextLink(`lesson/${lessonId}/${pathParts.subpage}?playlist=${playlist.id}&place=${place}`)
        } else {
          setNextLink(undefined);
        }

        if (pathParts.place > 0) {
          const place = Number(pathParts.place) - 1;
          const lessonId = playlist.lessons[place].id;
          setPrevLink(`lesson/${lessonId}/${pathParts.subpage}?playlist=${playlist.id}&place=${place}`)
        } else {
          setPrevLink(undefined);
        }
      }
    })();
  }, [pathParts]);
  

  return (
      <>
        {lesson && <>
          <ul className="menu">
            <li><Link to="">[Home]</Link></li>
            <li>{menuLink('video', 'Video')}</li>
            {lesson.transcript && <li>{menuLink('transcript', 'Dialog')}</li>}
            {lesson.vocab && <li>{menuLink('vocab', 'Vocab')}</li>}
            {prevLink && <li><Link to={prevLink}>[Prev]</Link></li>}
            {nextLink && <li><Link to={nextLink}>[Next]</Link></li>}
          </ul>
        </>}
      </>
    )
}
