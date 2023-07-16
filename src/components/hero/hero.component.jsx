import React from "react";

import "./hero.style.scss";

const downArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24" fill="none">
    <path d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="white" />
  </svg>
);

const palka = (
  <svg width="72" height="2" viewBox="0 0 72 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="72" height="2" fill="#FBD784" />
  </svg>
);

const Hero = () => {
  return (
    <div className="hero">
      <div class="social-buttons">
        <p>Folow us</p>
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <div class="hero-text">
        <p className="text-above">
          <i className="palka">{palka}</i>A Hiking guide
        </p>
        <p className="main-text">Be prepared for the Mountains and beyond!</p>
        <p className="bottom-text">
          sroll down <i className="arrow">{downArrow}</i>
        </p>
      </div>
    </div>
  );
};

export default Hero;
