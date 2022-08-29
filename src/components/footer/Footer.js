import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Logo from "../../images/LOGO.jpg";

export default function Footer() {
  return (
    <footer class="footer-distributed">
      <div class="footer-left">
        <img src={Logo} className="Logo" alt="logo" />
        <ul className="footer-links">
          <Link to="/" className="link-1">
            Home
          </Link>
          <Link to="/OurProduct">OurProduct</Link>
          <Link to="/TeaM">Team</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/About">About</Link>
        </ul>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span>444 S. Rohtak</span> Haryana India
          </p>
        </div>

        <div>
          <i class="fa fa-phone"></i>
          <p>9138463660</p>
        </div>

        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="mailto:2030122@sliet.ac.in">2030122@sliet.ac.in</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div class="footer-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
