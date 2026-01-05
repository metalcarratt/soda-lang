import { LessonMenu } from "../menu/lesson-menu";
import { Panel } from "./panel";
import { useDataContext } from "../data/use-data-context";
import './page.scss';

export const LessonPage = () => {
  const { lesson } = useDataContext();

  return (
    <div className="page">
      {<LessonMenu />}
      {lesson && <Panel />}
    </div>
  );
}