import React from "react";

import "./team.css";
import TeamCard from "./TeamCard";
import teamData from "./TeamData";

export default function Team() {

  let teamInfo = teamData.map((data)=>{
return    <TeamCard
{...data}
/>
  })
  return (
    <div className="team-page">
      <h1 className="team-heading">TeaM</h1>
      <div className="Members">
  {teamInfo}
      </div>
    </div>
  );
}
