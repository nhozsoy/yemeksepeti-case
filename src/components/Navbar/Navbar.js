import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css';
import NavbarListItem from '../NavbarListItem/NavbarListItem';

function Navbar() {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

  const toggleMobileMenu = () => setDisplayMobileMenu(!displayMobileMenu);

  const renderNavbarLogo = () => {
    return (
      <Link to='/' className='navbar-logo' onClick={() => setDisplayMobileMenu(false)}>
        <i className='fa fa-question-circle' />
        <span className="app-name">
          Poll App
        </span>
      </Link>
    )
  };

  const renderMobileMenuIcon = () => {
    return (
      <div className='mobile-menu-icon' onClick={toggleMobileMenu}>
        <i className={displayMobileMenu ? 'fa fa-times' : 'fa fa-bars'} />
      </div>
    )
  };

  const renderNavbarList = () => {
    return (
      <ul className={displayMobileMenu ? 'nav-menu active' : 'nav-menu'}>
        <NavbarListItem to='/'
                        onClick={toggleMobileMenu}
                        pageName='Question List' />
        <NavbarListItem to='/create-question'
                        onClick={toggleMobileMenu}
                        pageName='Create Question' />
      </ul>
    );
  };

  return (
    <div>
      <nav className='navbar'>
        {renderNavbarLogo()}
        {renderMobileMenuIcon()}
        {renderNavbarList()}
      </nav>
    </div>
  );
}

export default Navbar;
