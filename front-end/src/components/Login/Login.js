import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = (props) => {
  const { loginWithRedirect } = useAuth0();

  const [time, setTime] = useState('!^!!!');

  const getTimeFunction = () => {
    var foodTime = ':)^!!!';
    var date = new Date();
    var n = date.getHours();
    console.log(n);
    if (n > 5 && n <= 9) {
      foodTime = 'Thaks for bacon me so happy!^breakfast';
    } else if (n >= 9 && n < 11) {
      foodTime = 'Oh, Crêpe!^brunch';
    } else if (n >= 11 && n <= 15) {
      foodTime = 'Taco`bout awesome!^lunch';
    } else if (n >= 15 && n < 17) {
      foodTime = 'Guac`n`Roll!^a quick snack';
    } else if (n >= 17 && n < 20) {
      foodTime = 'You`re a souper!^dinner';
    } else if (n >= 20 && n <= 24) {
      foodTime = 'before bed cravings';
    } else {
      foodTime = 'midnight snack';
    }
    console.log('hereeeeee:', foodTime);
    return foodTime;
  };

  console.log('local time here globally: ', time.split('^')[1]);

  useEffect(() => {
    setTime(getTimeFunction());
  }, time);

  return (
    <button
      className="login-button"
      onClick={() => loginWithRedirect()}
    >
      {time.split('^')[0]}<br/> Join us for {time.split('^')[1]}
    </button>
  );
};

export default LoginButton;