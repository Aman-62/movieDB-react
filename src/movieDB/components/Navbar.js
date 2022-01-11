import React from 'react';
import { Link } from "react-router-dom";
// import SearchForm from './SearchForm'

const Navbar = () => {
  return (
    <nav className='nav container'>
      <div className='logo'>
        <Link to='/'>
          <p>TheMovieDB</p>
        </Link>
      </div>
      {/* <SearchForm /> */}
      <ul className='links'>
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