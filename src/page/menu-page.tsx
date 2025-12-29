import { functionLessons, interviewLessons, reporterLessons, sockSagaLessons, type LessonType } from "../lesson/lessons";
import './page.scss';
import { Link } from "./link";

export const MenuPage = () => {
  return (
    <div className="page">
      <div>
        <h1>Lessons</h1>
        <h2>Interview lessons</h2>
        <ol>
          {interviewLessons.map(lesson => <LessonLink lesson={lesson}/>)}
        </ol>
        <h2>Sock Saga lessons</h2>
        <ol>
          {sockSagaLessons.map(lesson => <LessonLink lesson={lesson}/>)}
        </ol>
        <h2>News report lessons</h2>
        <ol>
          {reporterLessons.map(lesson => <LessonLink lesson={lesson}/>)}
        </ol>

        <h2>Function lessons</h2>
        <ol>
          {functionLessons.map(lesson => <LessonLink lesson={lesson}/>)}
        </ol>
      </div>
    </div>
  );
}

const LessonLink = ({lesson}: {lesson: LessonType}) => {
  return <li>
    <Link to={`lesson/${lesson.pathName}`}>{lesson.name}</Link>
  </li>;
}