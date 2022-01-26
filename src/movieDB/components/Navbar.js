import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import '../../index.css'

const Navbar = () => {
  const getStorageTheme = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
    }
    return theme;
  };
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
        <ul className='links'>
          <li className='flex-center'>
            <button className='theme-toggle-btn flex-center' onClick={toggleTheme}>{theme === 'light-theme' ? <FiMoon /> : <FiSun />}</button>
          </li>
          <li className='flex-center'>
            <Link to='/'>Home</Link>
          </li>
          <li className='flex-center'>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
