import './App.scss'
import { usePath } from './page/use-path';
import { MenuPage } from './page/menu-page';
import { LessonPage } from './page/lesson-page';
import { DataProvider } from './data/use-data-context';
import { useLang } from './language/use-lang';
import { ChooseLangPage } from './language/choose-lang-page';


function App() {
  const { pathParts } = usePath();
  const { lang } = useLang(pathParts.lang);
  
  return (
    <DataProvider>
      { !lang ? <ChooseLangPage />
        : pathParts.page === 'menu'
        ? <MenuPage />
        : <LessonPage />
      }
    </DataProvider>);
}

export default App
