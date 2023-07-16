import React from "react";
import "./footer.style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <p className="logo">MTNN</p>
          <p className="mainText">
            Get out there & discover your next slope, mountain & destination!
          </p>
          <p className="copyRight">Copyright 2019 MNTN, Inc. Terms & Privacy</p>
        </div>
        <div className="right">
          <div className="onBlog">
            <p className="header">More on MNTN</p>
            <ul>
              <li>About MNTM</li>
              <li>Contributors & Writers</li>
              <li>Write for us</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="onMntn">
            <p className="header">More on the Blog</p>
            <ul>
              <li>The team</li>
              <li>Jobs</li>
              <li>Press</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
