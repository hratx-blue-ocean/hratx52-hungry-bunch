import React, {useState} from 'react';

//npm i react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles } from '@material-ui/core/styles';

import SingleCategory from './SingleCategory.js';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const useStyles = makeStyles(()=>({
  padding: {
    padding: '10px'
  }
}));


const CategoryCarousel = () => {

  //categories are currently placeholders, will need to access state for categories later
  // ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Beverage', 'Snack']
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Beverage', 'Snack'];
  const categorypictures = ['https://i.imgur.com/mAyXMl3.jpg', 'https://i.imgur.com/UmYs1Jx.jpg', 'https://i.imgur.com/i6P7pGX.jpg', 'https://i.imgur.com/NyGCFS0.jpg', 'https://i.imgur.com/y5NeQZN.jpg', 'https://i.imgur.com/OGPlFzj.jpg'];

  const classes = useStyles();


  return (
    <>
      <Carousel
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

        { /*
        <div>Breakfast</div>
        <div>Lunch</div>
        <div>Dinner</div>
        <div>Miscellaneous</div>
        */}
      </Carousel>

    </>
  );

};

export default CategoryCarousel;