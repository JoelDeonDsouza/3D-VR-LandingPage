import React from "react";
// Logo //
import Logo from "../assests/img/logo.svg";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content ">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="logo" />
          </li>
          <li>
            <a href="/" className="link-styled">Vision Pro</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
