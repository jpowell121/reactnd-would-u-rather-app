import React from 'react';
import { Link } from 'react-router-dom';
import fourohfour from '../images/404.png'

const NotFound = () => (
  <div className='login-form'>
    <img
      src={fourohfour}
      alt='Page not found'
      className='login-logo'
    />
    <div className='login-button'>
      <Link to="/" style={{textDecoration: 'none'}} >Return to login page</Link>
    </div>
  </div>
);

export default NotFound;