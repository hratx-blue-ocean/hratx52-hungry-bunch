import React from 'react';
import LoginButton from './Login.js';
import LoginCarousel from './LoginCarousel.js';
import HookedCarousel from './CarouselUsingHooks.js';


const LoginLandingPage = () => {

  return (
    <>
      <LoginButton />
      <LoginCarousel />
      {/* <HookedCarousel /> */}
    </>
  );
};

export default LoginLandingPage;