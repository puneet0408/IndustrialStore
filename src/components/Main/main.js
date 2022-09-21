//import { useState } from "react";
import "./main.css";
import sideImage from "../../images/setting.png";
import Slider from "./slider";
import MainProduct from "./product";
import {motion} from "framer-motion"
import { faUnderline } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <>
      <Slider />
      <div className="main">
        <img src={sideImage} className="RHS-image" alt="Rhs-img" />
        <motion.div animate={{opacity:1}} 
          transition={{
                    duration: 5,
                    delay: 0.3,
          }}
         initial={{opacity:0}}
          className="Main-text">
          <h2>prakash India company</h2>
          <h2>&</h2>
          <h2>Engineering</h2>
          <h2>design & manufacturing</h2>
        </motion.div>
        <img src={sideImage} className="LHS-image" alt="LHS-Img" />
      </div>
      <MainProduct />
    </>
  );
}
