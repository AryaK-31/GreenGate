import React, { useEffect, useState, useContext } from 'react';
import Logo from '../images/logo.png';
import ThemeContext from '../context/ThemeContext';
import { Link } from 'react-scroll'

function Navbar() {
  const [navbarColor, setNavbarColor] = useState('white');

  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavbarColor('rgb(205, 243, 194)');
    } else {
      setNavbarColor('white');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  return (
    <nav
      className='navbar-container'
      style={{
        backgroundColor: navbarColor,
        color: navbarColor === 'white' ? 'rgb(40, 137, 10)' : 'black',
        left: navbarColor === 'white' ? '3%' : '50%',
        transform: navbarColor === 'white' ? '' : 'translate(-50%,0)',
      }}
    >
      <Link to='hero' smooth={true} duration={500} spy={true} activeClass='active'>
        <div className="logo">
          <img height={25} src={Logo} alt="" />
          <h2>GreenGate</h2>
        </div>
      </Link>

      <ul className="navbar-items">
        <li className='navbar-item'>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            About
          </Link>
        </li>
        <li className='navbar-item'>
          <Link
            to="products"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Products
          </Link>
        </li>
        <li className='navbar-item'>
          <Link
            to="calculator"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Co2 Calculator
          </Link>
        </li>
        <li className='navbar-item'>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="active"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="switch">
        <label htmlFor="darkmode">Dark</label>
        <input
          type="radio"
          id='darkmode'
          name='theme'
          value='dark'
          onChange={handleChange}
          checked={theme === 'dark'}
        />
        <label htmlFor="lightmode">Light</label>
        <input
          type="radio"
          id='lightmode'
          name='theme'
          value='light'
          onChange={handleChange}
          checked={theme === 'light'}
        />
      </div>
    </nav>
  );
}

export default Navbar;
