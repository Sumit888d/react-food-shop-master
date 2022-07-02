import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';
import empty from './empty.png';

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className='emptyCart'>
      <img  src={empty} alt='' />
      <button onClick={() => history.push('/')}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;
