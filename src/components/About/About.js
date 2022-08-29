import React from "react";
import "./About.css";
import footerImg1 from "../../images/welding-steel.webp";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="mainfoot">
      <h1 className="aboutHeading"> About Us </h1>
      <div className="footer">
        <div className="workers">
          <img className="footerImg img1" src={footerImg1} alt="footerImg1" />
        </div>
        <div className="aboutCo">
          <h1 className="aboutCompany">about Company</h1>
          <h1 className="exp">Five year of working experience</h1>
          <p className="abouttxt">
            Established in the year 2018 at Pune, Maharashtra, we "Prakash India
            Company And Engineering" are a Sole Proprietorship based firm,
            engaged as the foremost Manufacturer of Automotive Axle Shaft, Jig
            Fixture, etc. Our products are high in demand due to their premium
            quality and affordable prices. Furthermore, we ensure to timely
            deliver these products to our clients, through this we have gained a
            huge clients base in the market. We also provide VMC Machine Job
            Work Service.
          </p>
          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
