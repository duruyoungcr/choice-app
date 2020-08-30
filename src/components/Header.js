import React from "react";

const Header = ({ submitted }) => {
  return (
    <header>
      <nav className="nav">
        <div className="nav__logo">fate's choice app</div>
      </nav>
      {!submitted ? (
        <div className="header__div">
          <h1 className="header__title">
            Find it difficult making a <span className="colored">choice</span> ?
          </h1>
          <p className="header__subTitle">
            Let fate make a <span className="colored">choice</span> for you.
          </p>
        </div>
      ) : (
        <div className="header__div">
          <h1 className="header__title">
            Here you go <span className="colored">!</span>
          </h1>
          <p className="header__subTitle">
            A <span className="colored">choice</span> has been made for you.
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
