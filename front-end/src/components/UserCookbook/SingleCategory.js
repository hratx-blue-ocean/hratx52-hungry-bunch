import React, {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { makeStyles } from '@material-ui/core/styles';

const SingleCategory = (props) => {

  const useStyles = makeStyles(()=>({
    borderOverlay: {

    }
  }));

  let handleClick = function (e) {
    e.preventDefault();
    console.log(props.categoryName, 'was clicked...');
  };


  return (
    <img src = {props.picture} style={{width: '200px', height: '150px'}} onClick={handleClick} />
  );
};

export default SingleCategory;