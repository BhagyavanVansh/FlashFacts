import React, { useState } from "react";
import "./header.css";
import Image from "../../images/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="title">
      <header className="header">
        <div className="container header__container">
          <img src={Image} alt="Logo-FlashFacts" />
          <HiMenuAlt3 onClick={handleNav} />
        </div>
      </header>
      <nav className="navbar">
        <ul
          className={`${
            showNav
              ? " navbar__container show__nav"
              : " navbar__container hide__nav"
          }`}
        >
          <li>
            <a href="/">Generel</a>
          </li>
          <li>
            <a href="/business">Business</a>
          </li>
          <li>
            <a href="/entertainment">Entertainment</a>
          </li>
          <li>
            <a href="/health">Health</a>
          </li>
          <li>
            <a href="/science">Science</a>
          </li>
          <li>
            <a href="/sports">Sports</a>
          </li>
          <li>
            <a href="/technology">Technology</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
