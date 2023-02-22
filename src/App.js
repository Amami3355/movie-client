import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Signin from './pages/Signin';
import MovieInfo from './pages/MovieInfo';
import NavBar from './components/NavBar';
import Signout from './pages/Signout';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import WatchList from './pages/WatchList';
import './components/comment/comment.css'
import MovieList from './pages/MovieList';
import ScrollToTop from './ScrollToTop';

function App() {
  // const [isconnected, setIsConnected] = useState(false);
  return (
    // <div className="App">

    // <ScrollToTop>
    <Routes>
      <Route path='navbar' element={<NavBar />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      <Route path='/signout' element={<Signout />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/error' element={<Error />}></Route>
      <Route path='/movie-info/:movieId' element={<MovieInfo />}></Route>
      <Route path='/movie-list/:genre' element={<MovieList />}></Route>
      <Route path='/watch-list' element={<WatchList />}></Route>
    </Routes>
    // </ScrollToTop>

    // </div>
  );
}

export default App;
