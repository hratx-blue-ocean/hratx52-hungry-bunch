import React, { useState, useEffect } from 'react';
import LoginButton from './Login.js';
import LoginCarousel from './LoginCarousel.js';
import Header from './Header.js';

const LoginLandingPage = () => {

  return (
    <>
      <Header />
      <LoginCarousel />
      <LoginButton />
    </>
  );
};

export default LoginLandingPage;