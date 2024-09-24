import React from 'react';
import { Link } from 'react-router-dom';
import notFoundErrorImage from '../../assets/404.svg';
import "./NotFoundError.css"

const NotFoundError = () => {
  return (
    <div className='not-found-error'>
        <div className='not-found-image'>
          <img src={notFoundErrorImage} alt='Not Found Error' />
        </div>
        <p>We're sorry, but the page you are looking for cannot be found. Please check the URL or return to the homepage.</p>
        <Link className='not-found-link' to='/'>Return to Homepage ➡️</Link>
    </div>
  );
}

export default NotFoundError;
