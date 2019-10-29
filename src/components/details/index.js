import React from "react";
import "./index.scss";

function Detail({ character }) {
  return (
    <div className="details-container">
      <div className="details-container--jobs">{`Professions:\u00A0${character.professions}`}</div>
      <div className="details-container--friends">{`Friends:\u00A0${character.friends}`}</div>
    </div>
  );
}

export default Detail;
