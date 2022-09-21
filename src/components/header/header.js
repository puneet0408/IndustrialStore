import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/LOGO.jpg";
import "./header.css";
export default function Nav() {
  const [navBgChangeOnScroll, setNavBgChangeOnScroll] = useState(false);
  const [navLinksChangeonScroll, setnavLinksChangeonScroll] = useState(false);
  function toggle() {
    setNavBgChangeOnScroll(!navBgChangeOnScroll);
  }
  const changeBackground = () => {
    setNavBgChangeOnScroll(false);
    if (window.scrollY >= 50) {
      setnavLinksChangeonScroll(true);
    } else {
      setnavLinksChangeonScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div>
        <header className="header" id="header">
          <nav
            className={
              navLinksChangeonScroll ? "scrollBar container " : "container"
            }
          >
            <div>
              <img className="logo" src={Logo} alt="logo" />
            </div>
            <ul className={navBgChangeOnScroll ? "nav__menu" : "nav__list"}>
              <NavLink
                to="/"
                className={
                  navLinksChangeonScroll
                    ? "Scrollactive nav__link "
                    : "nav__link"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/OurProduct"
                className={
                  navLinksChangeonScroll
                    ? "Scrollactive nav__link "
                    : "nav__link"
                }
              >
                OurProduct
              </NavLink>
              <NavLink
                to="/TeaM"
                className={
                  navLinksChangeonScroll
                    ? "Scrollactive nav__link "
                    : "nav__link"
                }
              >
                Team
              </NavLink>
              <NavLink
                to="/Contact"
                className={
                  navLinksChangeonScroll
                    ? "Scrollactive nav__link "
                    : "nav__link"
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/About"
                className={
                  navLinksChangeonScroll
                    ? "Scrollactive nav__link "
                    : "nav__link"
                }
              >
                About
              </NavLink>
            </ul>
            <div
              className={
                navLinksChangeonScroll
                  ? "mobileView-Icon mobileView-Icon-scroll "
                  : "mobileView-Icon"
              }
              id="nav-toggle"
              onClick={toggle}
            >
              {navBgChangeOnScroll ? (
                <i class="ri-close-circle-line"></i>
              ) : (
                <i class="ri-function-line"></i>
              )}
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
