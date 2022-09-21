import React from "react";
import "./team.css"
import {motion} from "framer-motion";
export default function TeamCard({memberImg,Post,memberName,number}) {

  return (
    <motion.div initial={{opacity:0}} transition={{
      duration: 5,
      delay: 0.3,
}} animate={{opacity:1}} className="memberCard">
      <img src={memberImg} alt="rrr" />
      <div className="designation">
      <p className="memberPost data" > {Post}</p>
        <h2 className="memberName" >{memberName}</h2>
        <p className="mobileNo" >{number}</p>
      </div>
    </motion.div>
  );
}
