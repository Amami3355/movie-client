import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Signin from './pages/Signin';
import MovieInfo from './pages/MovieInfo';
import NavBar from './components/NavBar';
// import { useState } from 'react';
import Signout from './pages/Signout';

function App() {
  // const [isconnected, setIsConnected] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path='navbar' element={<NavBar />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<Signin />}></Route>
        <Route path='/signout' element={<Signout />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/error' element={<Error />}></Route>
        <Route path='/movie-info' element={<MovieInfo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
