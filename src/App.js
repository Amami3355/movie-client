import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Login from './pages/Login';
import MovieInfo from './pages/MovieInfo';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='navbar' element = {<NavBar/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/connection' element = {<Login/>}></Route>
        <Route path='/about' element= {<About/>}></Route>
        <Route path='/contact' element= {<Contact/>}></Route>
        <Route path='/error' element= {<Error/>}></Route>
        <Route path='/movie-info' element={<MovieInfo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
