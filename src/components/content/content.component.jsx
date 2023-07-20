import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  pictureStyle,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once when the element comes into view
    threshold: 0.2, // Adjust the value based on when you want the animation to start
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      y: 75,
      opacity: 0,
    },
  };
  return (
    <>
      <div className="container" style={reverseContainer}>
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
          <div className={`${side2}`}>
            <div className="text-before" style={textBeforeStyle}>
              {textBefore}
            </div>
            <div className="text">
              <p className="text-above" style={textStyle}>
                <i className="palka">{palka}</i>
                {textAbove}
              </p>
              <p className="header" style={textStyle}>
                {header}
              </p>
              <p className="main-text" style={textStyle}>
                {mainText}
              </p>
              <p className="bottom-text" style={textStyle}>
                read more <i class="arrow">{rightArrow}</i>
              </p>
            </div>
          </div>
        </motion.div>
        <div className={`${side1}`}>
          <div className="picture" style={pictureStyle}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
