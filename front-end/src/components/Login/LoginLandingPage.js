import React, { useState, useEffect } from 'react';
import LoginButton from './Login.js';
import LoginCarousel from './LoginCarousel.js';
import Header from './Header.js';
import Footer from './Footer.js';

const LoginLandingPage = () => {

  return (
    <div className="login-page">
      <Header />
      <div className="login-landing-page-carousel-container">
        <LoginButton />
        <LoginCarousel />
      </div>
      <Footer/>
    </div>
  );
};

export default LoginLandingPage;