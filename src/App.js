
import './App.css';
import ListeDeFilms from './components/Filter';
import {Route,Routes} from 'react-router-dom';
import DetailsFilm from './components/DetailsFilm';
function App() {
  return (
   <>
    <div className="App">
    </div>
    <Routes >
       <Route path='/' element={<ListeDeFilms/>}/>
      <Route path='/descr/:id'element={<DetailsFilm/>}/>
    </Routes>
   </>
  );

}

export default App;
