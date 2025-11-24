import { LessonMenu } from "../menu/lesson-menu";
import { Panel } from "./panel";
import { useDataContext } from "../data/use-data-context";
import './page.scss';
import { MenuHover } from "../menu/menu-hover";

export const LessonPage = () => {
  const { lesson, panel } = useDataContext();
  console.log('panel', panel);
  const showMenuHover = panel.panel && panel.panel !== 'menu';

  return (
    <div className="page">
      {showMenuHover && <MenuHover><LessonMenu /></MenuHover>}
      {lesson && <Panel />}
    </div>
  );
}