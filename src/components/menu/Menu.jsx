import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Genres from '../dropdown/Genres';
import './menu.css';
import SearchBar from '../searchBar/SearchBar';
import { Menu as Menu2, MenuItem } from '@szhsin/react-menu';
import { connect } from 'react-redux';
import { login } from '../../actions';

function Menu(props) {
  const [isConnected, setIsConnected] = useState(false);

  function showMobileMenu() {
    document.getElementById('MobileMenu').style.display = 'block';
  }

  function hideMobileMenu() {
    document.getElementById('MobileMenu').style.display = 'none';
  }

  useEffect(() => {
    if (props.user) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [props.user]);

  return (
    <div
      data-role='Header'
      className='home-navbar-container'
    >
      <div className='home-navbar'>
        <Link to={'/'}>
          <img
            src={require('../../images/cine-vibe-logo.png')}
            style={{ height: 50, width: 100 }}
            alt='logo'
          />
        </Link>
        <SearchBar />
        {!isConnected && (
          <div className='home-links-container'>
            <Link
              className='btn home-link Navbar-Link'
              to={'/'}
            >
              Acceil
            </Link>
            <Genres />
            <Link
              className='btn home-link Navbar-Link'
              to={'/movie-list/trending'}
            >
              Nouveautés
            </Link>
            <Link
              className='btn home-link Navbar-Link'
              to={'/signin'}
            >
              Connexion
            </Link>
            <Link
              className='btn home-link Navbar-Link'
              to={'/signup'}
            >
              S'inscrire
            </Link>
          </div>
        )}
        {isConnected && (
          <div className='home-links-container'>
            <Link
              className='btn home-link Navbar-Link'
              to={'/'}
            >
              Acceil
            </Link>
            <Genres />
            <Link
              className='btn home-link Navbar-Link'
              to={'/movie-list/trending'}
            >
              Nouveautés
            </Link>
            <Menu2
              menuButton={
                <div className='btn home-link Navbar-Link'>
                  <img
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWUlEQVR4nO2WXUgUURTHx6Sij5eo8EUhql17CmQjP8jYe9dQGWfGisWUIqweKnrMB0PJelL0oTBpYyGEapcsUEJ3RUFtZtPK1zALIj8gH6Iv0zuS6Yk7m6njbrvrjDNb7IE/O8w9d+/vN2cHlmESlahE6VZZWVmbEEKlGOPHGOPXCKEpjDEsxOFw2Jl4LbvdfhwhNLoUWB2EUC8Tj4Uxvv43cJXEG4RQHcY4hYmHQghVRguvyiRC6Jip8Bjjgxjj2VUK0Gn8xBgfMU0AIdSzWvglEqM2m2294fAOhyMjWshyZx40V+XD+3us8hmix2m4AEKoJhrokfssgJ9bFu+1AnX/XTMEev/2pNXQ6qgmMWiGwFikJx0p3sVJjBgugDEm9PBYodXBwRd52gwB0EsAYwwJgVgKPBa24mS2rNcEKk/nEPBaCxmjCrzW8TlPOjRezl8Gc7vcAq5yS1jYUOu3KvJh3psO4LGOGSoAXusKQArnOhNeIOy612q4QKEi0cHOa/0JgY+do/DgsRYYJvBHxFc0rFnAzw0ZDr4owLm1T4BzmSfg5/M0C3Rw2DQBRcJX1KNBoM9UeEWgnd0Nfu7jKn46n6CT28vEQ0E7fxj83OeY4P1sLhNPBV2sBVpzIsO3ZkPcPHl1gYsBaN4B8Gg/wBME0FEYDL2m9+iaizH+j1tMAlGEideCf1GgWJq2pVZ3D2456/0xWL9rJhI87aG9aVVdL/m+qQzTwHlxOlOQ5IAgyZBa1QVJJW7IOV81G0nAfqFylvamVXcD3cuLssgHpg8YBl7gg428RO4IIpmnADSHHo5C0gm3IlF7pSAsPF2jPbQ3t2Vc2RuUIHO8RJqcr2DDmsJzA99TeEl+tnDw0lhqA0G4EjccvXQRntZa4UvjZiX0mt5bWLfW9a/YLwSnITnFyZ1rAl/84tt2QSTDoQ5WIsqQXj8Ayb8nESrJpW7Y1/Bc6Q33PbxEhljp6zZ96QGSeIl0hoVfEtT2ATJrHsCecw2wtaxJCb3OrPEAapuIuF9QQtp15RdEciq6g/UMKdMF3tkCybxE3pkg8PYqwDrNArwk5xkPLwffh4CMNAsIErlploAgkhvaJyDK/aYJSHJAhwnIEyYKTOggQGbMEyAzmgUSlaj/vH4B/ih/Ifxu3R8AAAAASUVORK5CYII='
                    alt=''
                  />
                </div>
              }
              transition
            >
              <MenuItem>
                <Link
                  className='btn home-link Navbar-Link'
                  to={'/watch-list'}
                >
                  Watch list
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className='btn home-link Navbar-Link'
                  to={'/profile'}
                >
                  Profile
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  className='btn home-link Navbar-Link'
                  to={'/signout'}
                >
                  Déconnexion
                </Link>
              </MenuItem>
            </Menu2>
          </div>
        )}

        <div
          onClick={showMobileMenu}
          id='BurgerMenu'
          data-role='BurgerMenu'
          className='home-burger-menu'
        >
          <svg
            viewBox='0 0 1024 1024'
            className='home-icon'
          >
            <path d='M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z'></path>
          </svg>
        </div>
        <div
          id='MobileMenu'
          data-role='MobileMenu'
          className='home-mobile-menu'
        >
          <div className='home-container01'>
            <span className='Card-Heading home-heading1'>Logo</span>
            <div
              onClick={hideMobileMenu}
              data-role='CloseMobileMenu'
              className='home-close-menu'
            >
              <svg
                viewBox='0 0 1024 1024'
                className='home-icon02'
              >
                <path d='M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z'></path>
              </svg>
            </div>
          </div>
          {!isConnected && (
            <div className='home-links-container1'>
              <Link
                className='btn home-link Navbar-Link'
                to={'/'}
              >
                Acceil
              </Link>
              <Genres />
              <Link
                className='btn home-link Navbar-Link'
                to={'/movie-list/trending'}
              >
                Nouveautés
              </Link>
              <Link
                className='btn home-link Navbar-Link'
                to={'/signin'}
              >
                Connexion
              </Link>
              <Link
                className='btn home-link Navbar-Link'
                to={'/signup'}
              >
                S'inscrire
              </Link>
            </div>
          )}
          {isConnected && (
            <div className='home-links-container1'>
              <Link
                className='btn home-link Navbar-Link me-1 mb-1'
                to={'/'}
              >
                Acceil
              </Link>
              <Genres />
              <Link
                className='btn home-link Navbar-Link'
                to={'/movie-list/trending'}
              >
                Nouveautés
              </Link>
              <Link
                className='btn home-link Navbar-Link'
                to={'/watch-list'}
              >
                Watch list
              </Link>
              <Link
                className='btn home-link Navbar-Link'
                to={'/profile'}
              >
                Profil
              </Link>
              <Link
                className='btn home-link Navbar-Link'
                to={'/signout'}
              >
                Déconnextion
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => {
      dispatch(login(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
