import React from 'react';
import './styles.css';
import Logo from '../../common/Logo';
import ban from './rest3.jpg';
import ban1 from './rest1.jpg';
import ban2 from './rest2.webp';
import Carousel, { CarouselItem } from "../../common/Carousel/Carousel";


const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
      <div className="box">
        <h1>
        Welcome Foodie!</h1>
        <div className="carousel">
        <Carousel>
        <CarouselItem><img src={ban} alt="thali"/></CarouselItem>
        <CarouselItem><img src={ban1} alt="" /></CarouselItem>
        <CarouselItem><img src={ban2} alt="" /></CarouselItem>
      </Carousel>
      </div>
        <button className='btn' onClick={handleScrollMenu}>
          View Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
      
      </div>
    </div>
  </header>
);

export default Banner;
