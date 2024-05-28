
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopRated from './components/TopRated';
import UpComing from './components/UpComing';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/popular' element={<Home/>}/>
        <Route exact path='/toprated' element={<TopRated/>}/>
        <Route exact path='/upcoming' element={<UpComing/>}/>
        <Route exact path='/movie/:id' element={<MovieDetails/>}/>
      </Routes>
      {/* <MovieDetails/> */}
    </div>
  );
}

export default App;
