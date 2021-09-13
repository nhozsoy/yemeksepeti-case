import React from 'react';
import { Link } from 'react-router-dom';
import './NavbarListItem.css';
import PropTypes from 'prop-types';

function NavbarListItem(props) {
  return (
    <li className='nav-item'>
      <Link to={props.to} className='nav-links' onClick={props.onClick}>
          {props.pageName}
      </Link>
    </li>
  );
}

NavbarListItem.propTypes = {
  to: PropTypes.string,
  onClick: PropTypes.func,
  pageName: PropTypes.string,
};

export default NavbarListItem;
