import React from 'react';
import logo from './petal.png';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' />
      <span>
        <b>FOODIE POINT</b>
      </span>
    </div>
    <p>
      <b>Sweets and Farsan</b>
    </p>
  </div>
);

export default Logo;
