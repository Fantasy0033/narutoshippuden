import Header from '../Header/header';
import bg from '../../resources/img/bg.jpg';

import MainPage from '../pages/MainPage';

function App() {
  return (
      <div>
        <Header/>
        <main>
            <MainPage/>
        </main>
        <img className='bg' src={bg} alt='vision'/>
      </div>
  );
}

export default App;
