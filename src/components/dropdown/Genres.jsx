import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowDropdownCircle } from 'react-icons/io'

function Genres() {

    const { genre } = useParams();

    return (
        <Menu menuButton={
            <div className="btn home-link Navbar-Link">Genres <IoMdArrowDropdownCircle /><span>  </span>
            </div>


        } transition>
            <MenuItem><Link to='/movie-list/action'>Action</Link> </MenuItem>
            <MenuItem><Link to={'/movie-list/aventure'}>Aventure</Link></MenuItem>
            <MenuItem><Link to={'/movie-list/science-fiction'}>Science Fiction</Link></MenuItem>
            <MenuItem><Link to={'/movie-list/comedie'}>Comédie</Link></MenuItem>
        </Menu>

    );
}


export default Genres;