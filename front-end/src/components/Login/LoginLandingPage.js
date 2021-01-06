import React, { useState, useEffect } from 'react';
import LoginButton from './Login.js';
import LoginCarousel from './LoginCarousel.js';

const LoginLandingPage = () => {

  return (
    <>
      <LoginCarousel />
      <LoginButton />
    </>
  );
};

export default LoginLandingPage;