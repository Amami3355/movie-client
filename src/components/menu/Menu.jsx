import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Genres from '../dropdown/Genres';
import './menu.css'
import AuthService from '../../services/auth.service'
import SearchBar from '../searchBar/SearchBar';
import { Menu as Menu2, MenuItem } from '@szhsin/react-menu';

function Menu() {
    const [isConnected, setIsConnected] = useState(false)

    function showMobileMenu() {
        // document.getElementById('BurgerMenu').style.display = 'none'
        document.getElementById('MobileMenu').style.display = 'block'
    }

    function hideMobileMenu() {
        document.getElementById('MobileMenu').style.display = 'none'
        // document.getElementById('BurgerMenu').style.display = 'block'

    }

    useEffect(
        () => {
            const user = AuthService.getCurrentUser();
            if (user) {
                setIsConnected(true)
            } else {
                setIsConnected(false)
            }
        }, [isConnected]
    )

    return (
        <div data-role="Header" className="home-navbar-container">
            <div className="home-navbar">
                <span className="Card-Heading home-heading">Logo</span>
                <SearchBar />
                {!isConnected && (
                    <div className="home-links-container">
                        <Link className="btn home-link Navbar-Link" to={'/'}>Acceil</Link>
                        <Genres />
                        <Link className="btn home-link Navbar-Link" to={'/movie-list/trending'}>Nouveautés</Link>
                        <Link className="btn home-link Navbar-Link" to={'/signin'}>Connexion</Link>
                        <Link className="btn home-link Navbar-Link" to={'/signup'}>S'inscrire</Link>
                    </div>
                )}
                {isConnected && (
                    <div className="home-links-container">

                        <Link className="btn home-link Navbar-Link" to={'/'}>Acceil</Link>
                        <Genres />
                        <Link className="btn home-link Navbar-Link" to={'/movie-list/trending'}>Nouveautés</Link>
                        <Menu2 menuButton={
                            <div className="btn home-link Navbar-Link">
                                <img src={require('../../images/profile-svgrepo-com.svg')} />
                            </div>
                        } transition>
                            <MenuItem><Link className="btn home-link Navbar-Link" to={'/watch-list'}>Watch list</Link></MenuItem>
                            <MenuItem><Link className="btn home-link Navbar-Link" to={'/profile'}>Profile</Link></MenuItem>
                            <MenuItem><Link className="btn home-link Navbar-Link" to={'/signout'}>Déconnexion</Link></MenuItem>
                        </Menu2>

                    </div>
                )}


                <div onClick={showMobileMenu} id="BurgerMenu" data-role="BurgerMenu" className="home-burger-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z">
                        </path>
                    </svg>
                </div>
                <div id='MobileMenu' data-role="MobileMenu" className="home-mobile-menu">
                    <div className="home-container01">
                        <span className="Card-Heading home-heading1">Logo</span>
                        <div onClick={hideMobileMenu} data-role="CloseMobileMenu" className="home-close-menu">
                            <svg viewBox="0 0 1024 1024" className="home-icon02">
                                <path
                                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    {!isConnected && (
                        <div className="home-links-container1">
                            <Link className="btn home-link Navbar-Link" to={'/'}>Acceil</Link>
                            <Genres />
                            <Link className="btn home-link Navbar-Link" to={'/movie-list/trending'}>Nouveautés</Link>
                            <Link className="btn home-link Navbar-Link" to={'/signin'}>Connexion</Link>
                            <Link className="btn home-link Navbar-Link" to={'/signup'}>S'inscrire</Link>
                        </div>
                    )}
                    {isConnected && (
                        <div className="home-links-container1">
                            <Link className="btn home-link Navbar-Link me-1 mb-1" to={'/'}>Acceil</Link>
                            <Genres />
                            <Link className="btn home-link Navbar-Link" to={'/movie-list/trending'}>Nouveautés</Link>
                            <Link className="btn home-link Navbar-Link" to={'/watch-list'}>Watch list</Link>
                            <Link className="btn home-link Navbar-Link" to={'/profile'}>Profil</Link>
                            <Link className="btn home-link Navbar-Link" to={'/signout'}>Déconnextion</Link>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Menu;