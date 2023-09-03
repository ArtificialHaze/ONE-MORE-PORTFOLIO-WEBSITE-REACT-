import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src="[YOUR_LOGO]" alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          className="desktopMenuListItem"
          to="introduction"
          spy
          smooth
          offset={-100}
          duration={350}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          className="desktopMenuListItem"
          to="skills"
          spy
          smooth
          offset={-50}
          duration={350}
        >
          About
        </Link>
        <Link
          activeClass="active"
          className="desktopMenuListItem"
          to="works"
          spy
          smooth
          offset={-50}
          duration={350}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          className="desktopMenuListItem"
          to="contactPage"
          spy
          smooth
          offset={-50}
          duration={350}
        >
          Clients
        </Link>
      </div>
      <button
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
        className="desktopTopMenuButton"
      >
        <img src="[MENU_IMAGE]" className="desktopMenuImg" alt="Menu" />
        Contact me
      </button>
      <img
        onClick={() => setShowMenu((prev) => !prev)}
        src="[MENU_BARS]"
        alt="MenuBar"
        className="mobileMenu"
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          className="listItem"
          onClick={() => setShowMenu(false)}
          to="introduction"
          spy
          smooth
          offset={-100}
          duration={350}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          className="listItem"
          onClick={() => setShowMenu(false)}
          to="skills"
          spy
          smooth
          offset={-50}
          duration={350}
        >
          About
        </Link>
        <Link
          activeClass="active"
          className="listItem"
          onClick={() => setShowMenu(false)}
          to="works"
          spy
          smooth
          offset={-50}
          duration={350}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          className="listItem"
          onClick={() => setShowMenu(false)}
          to="contactPage"
          spy
          smooth
          offset={-50}
          duration={350}
        >
          Clients
        </Link>
        <Link
          activeClass="active"
          className="listItem"
          onClick={() => setShowMenu(false)}
          to="contact"
          spy
          smooth
          offset={-50}
          duration={350}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
