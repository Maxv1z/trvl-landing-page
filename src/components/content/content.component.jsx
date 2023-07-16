import React from "react";

import "./content.style.scss";

const rightArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16" fill="none">
    <path
      d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z"
      fill="#FBD784"
    />
  </svg>
);

const palka = (
  <svg width="72" height="2" viewBox="0 0 72 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="72" height="2" fill="#FBD784" />
  </svg>
);

const Content = ({
  textAbove,
  textBefore,
  mainText,
  header,
  image,
  side1,
  side2,
  reverseContainer,
  textBeforeStyle,
  textStyle,
}) => {
  return (
    <>
      <div class="container" style={reverseContainer}>
        <div className={`${side2}`}>
          <div className="text-before" style={textBeforeStyle}>
            {textBefore}
          </div>
          <div class="text">
            <p class="text-above" style={textStyle}>
              <i class="palka">{palka}</i>
              {textAbove}
            </p>
            <p class="header" style={textStyle}>
              {header}
            </p>
            <p class="main-text" style={textStyle}>
              {mainText}
            </p>
            <p class="bottom-text" style={textStyle}>
              read more <i class="arrow">{rightArrow}</i>
            </p>
          </div>
        </div>
        <div className={`${side1}`}>
          <div class="picture">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
