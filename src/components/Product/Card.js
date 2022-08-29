import React, { useState } from "react";

import "./Card.css";
import CardModel from "./CardModel";
export default function OurProducts(props) {
  const [clickOnCardToShowModal, setShowmodel] = useState(false);
  return (
    <>
      {clickOnCardToShowModal && (
        <CardModel onClose={() => setShowmodel(false)} cardInfo={props} />
      )}
      <div className="Card" onClick={() => setShowmodel(true)}>
        <div className="card-data">
          <img src={props.Img} alt="cardImg" />
          <h3 className="machineName">{props.Machine}</h3>
          <p class="price">{props.piece}</p>
        </div>
      </div>
    </>
  );
}
