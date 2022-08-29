import React from "react";
import "./team.css"
export default function TeamCard({memberImg,Post,memberName,number}) {

  return (
    <div  className="memberCard">
      <img src={memberImg} alt="rrr" />
      <div className="designation">
      <p className="memberPost data" > {Post}</p>
        <h3 className="memberName" >{memberName}</h3>
        <p className="mobileNo data" >{number}</p>
      </div>
    </div>
  );
}
