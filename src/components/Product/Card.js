import React, { useState } from "react";
import {motion} from "framer-motion";

import "./Card.css";
import CardModel from "./CardModel";
export default function OurProducts(props) {
  const [clickOnCardToShowModal, setShowmodel] = useState(false);
  return (
    <>
      {clickOnCardToShowModal && (
        <CardModel onClose={() => setShowmodel(false)} cardInfo={props} />
      )}
      <motion.div animate={{scale:1,transitionDelay:2,transitionDuration:'2s'}}    initial={{scale:0} } className="Card" onClick={() => setShowmodel(true)}>
        <div className="card-data">
          <img  src={props.Img} alt="cardImg" />
          <h2 className="machineName">{props.Machine}</h2>
          <p class="price">{props.piece}</p>
        </div>
      </motion.div>
    </>
  );
}
