import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <nav className='navbar-custom p-3'>
      <div className='container-fluid d-sm-flex'>
        <Link to='/' className='d-block fs-3 text-center m-2 m-sm-0'>
          <i className={icon}></i> {title}
        </Link>
        <ul className='d-flex m-auto me-0 justify-content-center'>
          <li className='mx-2'>
            <Link to='/'>Home</Link>
          </li>
          <li className='mx-2'>
            <Link to='/About'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github User Finder',
  icon: 'fab fa-github',
};

export default Navbar;
