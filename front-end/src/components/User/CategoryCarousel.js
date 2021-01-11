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

const CategoryCarousel = (props) => {
  //categories images are currently static but can be changed if needed
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Beverage', 'Snack'];
  const categorypictures = ['https://i.imgur.com/mAyXMl3.jpg', 'https://i.imgur.com/UmYs1Jx.jpg', 'https://i.imgur.com/i6P7pGX.jpg', 'https://i.imgur.com/NyGCFS0.jpg', 'https://i.imgur.com/y5NeQZN.jpg', 'https://i.imgur.com/OGPlFzj.jpg'];

  // const categorypictures = ['https://previews.123rf.com/images/funandrejss/funandrejss1703/funandrejss170300046/73562315-morning-scrambled-egg-bacon-breakfast-on-white-plate.jpg', 'https://media.vogue.mx/photos/5d72acaa96e6be00084ffe5f/master/w_3492,c_limit/dieta-cetogenica-keto-02.jpg', 'https://image.freepik.com/free-photo/lentil-soup-with-vegetables-white-plate-white-background-top-view-plant-based-food-clean-eating_79830-873.jpg','https://image.freepik.com/free-photo/top-view-little-delicious-cake-with-cream-fruits-inside-white-plate-grey-blue-desk-fruit-cake-biscuit_140725-22854.jpg', 'https://st3.depositphotos.com/1665362/19295/i/1600/depositphotos_192951818-stock-photo-food-drink-holidays-party-concept.jpg', 'https://st.focusedcollection.com/7258374/i/650/focused_100487730-stock-photo-white-plate-with-healthy-salad.jpg'];

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

        {categories.map(function(currentCategory, index) {
          //console.warn(currentCategory, index)
          return (<div key={index}>
            <SingleCategory
              categoryName = {currentCategory}
              picture={categorypictures[index]}
              setCurrCategory={props.setCurrCategory}
            />
          </div>);
        })}
      </Carousel>
    </>
  );
};

export default CategoryCarousel;