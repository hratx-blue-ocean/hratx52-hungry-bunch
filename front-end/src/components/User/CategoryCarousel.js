import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import SingleCategory from './SingleCategory.js';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const useStyles = makeStyles(()=>({
  padding: {
    padding: '10px'
  }
}));


const CategoryCarousel = () => {

  //categories images are currently static but can be changed if needed
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Beverage', 'Snack'];
  const categorypictures = ['https://i.imgur.com/mAyXMl3.jpg', 'https://i.imgur.com/UmYs1Jx.jpg', 'https://i.imgur.com/i6P7pGX.jpg', 'https://i.imgur.com/NyGCFS0.jpg', 'https://i.imgur.com/y5NeQZN.jpg', 'https://i.imgur.com/OGPlFzj.jpg'];

  const classes = useStyles();


  return (
    <>
      <Carousel
        arrows={true}
        centerMode={false}
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        //itemClass={classes.padding}
      >
        {/*
           autoPlay={this.props.deviceType !== "mobile" ? true : false}
           deviceType={this.props.deviceType}
        */}

        {categories.map(function(currentCategory, index) {
          //console.warn(currentCategory, index)
          return (<div key={index}><SingleCategory categoryName = {currentCategory} picture={categorypictures[index]} /></div>);
        })}


      </Carousel>

    </>
  );

};

export default CategoryCarousel;