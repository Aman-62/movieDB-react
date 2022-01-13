import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FiSearch, FiSun, FiMoon } from "react-icons/fi";
import { useGlobalContext } from '../Context';
import '../../index.css'

const Navbar = () => {
  const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };

  const { searchToggle, setSearchToggle } = useGlobalContext()
  const [theme, setTheme] = useState(getStorageTheme())
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else
      setTheme('light-theme')
  }
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <nav className='nav nav-container'>
      <div className='logo'>
        <Link to='/'>
          <p>TheMovieDB</p>
        </Link>
      </div>
      <div className="nav-links">
        <button className='search-btn' onClick={() => { setSearchToggle(!searchToggle) }}>
          <FiSearch />
        </button>
        <ul className='links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
        <button className='theme-toggle-btn' onClick={toggleTheme}>{theme === 'light-theme' ? <FiMoon /> : <FiSun />}</button>
      </div>
    </nav>
  )
}

export default Navbar
