import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__brand">
        <i className="fa fa-copyright"></i> 2020 | fate's choice
      </p>
      <p>
        made with <i className="fa fa-heart"></i> by{" "}
        <a
          className="colored"
          href="http://rayced.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          ray
        </a>
      </p>
    </div>
  );
};
export default Footer;
