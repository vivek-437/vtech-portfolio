import React from "react";

const Footer = () => {
  return (
    <>
      <div className="fotter_container">
        <div className="info">Copyright © 2022  V-tech</div>
        <div className="link">
            <ul className="foot">
          <a
            href="https://instagram.com/_____.vivek.____"
            target="blank"
            rel="icon"
            className="instafoot"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/people/Vivek-Gupta/100028261200134/"
            target="blank"
            rel="icon"
            className="facebookfoot"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
