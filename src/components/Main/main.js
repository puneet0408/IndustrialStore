//import { useState } from "react";
import "./main.css";
import sideImage from "../../images/setting.png";
import Slider from "./slider";
import MainProduct from "./product";

export default function Main() {
  return (
    <>
      <Slider />
      <div className="main">
        <img src={sideImage} className="RHS-image" alt="Rhs-img" />
        <div className="Main-text">
          <h2>parkash India company</h2>
          <h2>&</h2>
          <h2>Engineering</h2>
          <h2>design & manufacturing</h2>
        </div>
        <img src={sideImage} className="LHS-image" alt="LHS-Img" />
      </div>
      <MainProduct />
    </>
  );
}
