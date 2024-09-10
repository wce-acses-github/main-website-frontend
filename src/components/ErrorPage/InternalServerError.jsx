import React from 'react';
import { Link } from 'react-router-dom';
import internalServerErrorImage from '../../assets/503.svg';

function InternalServerError() {
  return (
    <div className='internal-server-error'>
        <img src={internalServerErrorImage} alt='Internal Server Error' />
        <h1>503 Service Unavailable</h1>
        <p>We're sorry, but the server is temporarily unavailable. Please try again later.</p>
        <Link to='/'>Return to Homepage</Link>
    </div>
  );
}

export default InternalServerError;
