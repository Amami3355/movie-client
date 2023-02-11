import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

function Genres() {
    return (
        <Menu menuButton={
            <div className="btn home-link Navbar-Link">Genres<span>  </span>
                <span style={{ display: 'inline-block', transform: "rotate(90deg)" }}>&#x27A4;</span>
            </div>
        } transition>
            <MenuItem>Action</MenuItem>
            <MenuItem>Aventure</MenuItem>
            <MenuItem>Science Fiction</MenuItem>
            <MenuItem>Comédie</MenuItem>
        </Menu>

    );
}


export default Genres;