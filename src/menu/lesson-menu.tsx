import { useEffect, useState } from "react";
import { useDataContext } from "../data/use-data-context";
import { Link, type TargetType } from "../page/link";
import { loadPlaylist } from "../playlists/load-playlist";
import './menu.scss';

export const LessonMenu = () => {
  const {lesson, pathParts, lang} = useDataContext();
  const [nextLink, setNextLink] = useState<TargetType>();
  const [prevLink, setPrevLink] = useState<TargetType>();

  const menuLink = (subpath: string, text: string) => {
    const target = {
      lang: lang.lang ?? '',
      lessonId: lesson?.pathName,
      subpage: subpath,
      playlistId: pathParts.playlist,
      place: pathParts.place
    }
    return <Link target={target}>{text}</Link>
  }

  useEffect(() => {
    (async () => {
      if (pathParts.playlist && pathParts.place) {
        const playlist = await loadPlaylist(pathParts.playlist);

        if (playlist.lessons.length > (Number(pathParts.place) + 1)) {
          const place = Number(pathParts.place) + 1;
          const lessonId = playlist.lessons[place].id;
          setNextLink({
            lang: lang.lang ?? '',
            lessonId,
            subpage: pathParts.subpage,
            playlistId: playlist.id,
            place: place
          });
        } else {
          setNextLink(undefined);
        }

        if (pathParts.place > 0) {
          const place = Number(pathParts.place) - 1;
          const lessonId = playlist.lessons[place].id;
          setPrevLink({
            lang: lang.lang ?? '',
            lessonId,
            subpage: pathParts.subpage,
            playlistId: playlist.id,
            place: place
          });
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
            <li><Link target={{lang: lang.lang ?? ''}}>[Home]</Link></li>
            <li>{menuLink('video', 'Video')}</li>
            {lesson.transcript && <li>{menuLink('transcript', 'Dialog')}</li>}
            {lesson.vocab && <li>{menuLink('vocab', 'Vocab')}</li>}
            {prevLink && <li><Link target={prevLink}>[Prev]</Link></li>}
            {nextLink && <li><Link target={nextLink}>[Next]</Link></li>}
          </ul>
        </>}
      </>
    )
}
