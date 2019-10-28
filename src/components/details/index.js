import React from "react";
import "./index.scss";

function DetailPanel({ character }) {
  return (
    <div className="c-moredetails">
      <div className="c-moredetails--jobs">{`Professions:${character.professions}`}</div>
      <div className="c-moredetails--friends">{`Friends:${character.friends}`}</div>
    </div>
  );
}

export default DetailPanel;
