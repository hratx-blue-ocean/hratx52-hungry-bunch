import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const customFavIcons = {
  1: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Very Neutral',
  },
  2: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  3: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  }
};

const IconContainer = (props)=> {

  const { value, ...other } = props;
  return <span {...other}>{customFavIcons[value].icon}</span>;
};



const FavoritedByDisplay = (props) => {

  return (
    <Rating
      max={3}
      size='small'
      name="customized-icons"
      defaultValue={props.value}
      getLabelText={(value) => customFavIcons[value].label}
      IconContainerComponent={IconContainer}
      disabled
    />
  );

};

export default FavoritedByDisplay;