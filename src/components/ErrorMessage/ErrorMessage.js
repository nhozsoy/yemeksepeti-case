import React from 'react';
import './ErrorMessage.css';
import PropTypes from 'prop-types';

function ErrorMessage(props) {
  return (
    <p className='error-message'>{props.message}</p>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
