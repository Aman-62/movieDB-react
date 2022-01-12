import React from 'react';
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useGlobalContext } from '../Context';

const Navbar = () => {
  const { searchToggle, setSearchToggle } = useGlobalContext()
  return (
    <nav className='nav container'>
      <div className='logo'>
        <Link to='/'>
          <p>TheMovieDB</p>
        </Link>
      </div>
      <ul className='links'>
        <button className='search-btn' onClick={() => { setSearchToggle(!searchToggle) }}>
          <FiSearch />
        </button>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
