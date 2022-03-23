import React from "react";
import { InfoCard } from "./InfoCard";
import Figure from "./Figure";

function Outputbox({ usersData }) {
  return (
    <React.Fragment>
      <div className="below-input-box">
        <Figure src={usersData.results[0].picture.large} />
        <InfoCard user={usersData.results[0]} />
      </div>
    </React.Fragment>
  );
}

export default Outputbox;
