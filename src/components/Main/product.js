import React from "react";
import { useState } from "react";
import cardData from "../Product/productData";
import "./product.css";

function Product() {
  const [cardMain] = useState(cardData);

  const card = cardMain.map((item) => {
    const { Img, Machine } = item;
    return (
      <div className="each-card">
        <img src={Img} alt="backimg" />
        <h2>{Machine} </h2>
      </div>
    );
  });

  return (
    <div className="productsinfo">
      <h2 className="productHeading"> our Products </h2>

      <div className="productMain">
        <div className="mainCard card-Scroll">
          <div className="cardData">{card}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
