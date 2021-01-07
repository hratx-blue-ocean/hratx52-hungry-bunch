import React, { useState, useEffect } from 'react';
import LoginButton from './Login.js';
import LoginCarousel from './LoginCarousel.js';
import Header from './Header.js';
import Footer from './Footer.js';

const LoginLandingPage = () => {

  return (
    <>
      <Header />
      <LoginCarousel />
      <LoginButton />
      <Footer/>
    </>
  );
};

export default LoginLandingPage;