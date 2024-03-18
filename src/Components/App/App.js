import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from '../errorPage/ErrorPage';
import Header from '../Header/header';

import MainPage from '../pages/MainPage';
import Akatsuki from '../pages/AkatsukiPage';
import SingleCharPage from '../pages/SingleCharPage';

function App() {
  return (
    <Router>  {/* Добавляем Роутер */}
      <div>
        <Header/>
        <main>
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/akatsuki" element={<Akatsuki/>}/>
              <Route path="/character/:id" element={<SingleCharPage/>}/>
              <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </main>
      </div>
    </Router>

  );
}

export default App;
