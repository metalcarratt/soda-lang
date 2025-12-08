import { useDataContext } from "../data/use-data-context";
import { Link } from "../page/link";

export const LessonMenu = () => {
  const {lesson, menu} = useDataContext();

  const menuLink = (subpath: string, text: string) => {
    return <Link to={`lesson/${lesson?.pathName}/${subpath}`} afterFn={() => menu.setVisible(false)}>{text}</Link>
  }

  return (
      <div>
        <Link to="/">&lt; Back to main menu</Link>
        {lesson && <>
          <h2>{lesson.name}</h2>
          <ol>
            <li>Watch the {menuLink('video', 'video')}.</li>
            {lesson.transcript && <li>Read the {menuLink('transcript', 'transcript')}.</li>}
            {lesson.vocab && <li>Study the {menuLink('vocab', 'vocab')}.</li>}
            {lesson.transcript?.[0].timing !== undefined && <li>Watch the {menuLink('video-subs', 'video with subtitles')}.</li>}
          </ol>
        </>}
      </div>
    )
}
