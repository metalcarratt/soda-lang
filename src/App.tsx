import './App.scss'
import { usePath } from './page/use-path';
import { MenuPage } from './page/menu-page';
import { LessonPage } from './page/lesson-page';
import { DataProvider } from './data/use-data-context';


function App() {
  const { pathParts } = usePath();
  
  return (
    <DataProvider>
      {pathParts.page === 'menu' ? <MenuPage /> : <LessonPage />}
    </DataProvider>);
}

export default App
