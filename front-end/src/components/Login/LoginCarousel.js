import React from 'react';
import Slider from 'react-slick';
import styles from './loginStyles.css';


const LoginCarousel = () => {
  const settings = {
    dots: true,
    // variableWidth: true,
    // centerMode: true,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };


  const imageSourcesToDisplay = [
    'https://seforeceptai.lt/upload/original/2019/06/pyragas-tv7G8xwk3nnFu9zbDO042PIyb.jpg',
    'https://seforeceptai.lt/upload/original/2019/07/desertai-mbesCAjG4MbzmtHc32ezHloQv.jpg',
    'https://seforeceptai.lt/upload/original/2019/07/ledai-1arv1H4NllW5rvVoEfvaR16wc.jpg',
    'https://seforeceptai.lt/upload/original/2019/06/homepage-bg-ehzxUSP8cSggzhNRyIEKNMmNy.jpg'
  ];


  return (
    <div className="login-landing-page-carousel-placeholder">
      <h2>AutoPlay</h2>
      <Slider className="login-landing-page-carousel" {...settings}>
        {imageSourcesToDisplay.map((image, index) => {
          debugger;
          return (
            <div key={image}>
              <img className="login-landing-page-image" src={image} />
            </div>
          );
        }
        )}
      </Slider>
    </div>
  );
};

export default LoginCarousel;