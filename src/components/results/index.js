import React, { useState, Fragment } from "react";
import DetailPanel from "../details";
import "./index.scss";

function ResultsPanel({ character }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewMoreInfo = () => {
    showDetails ? setShowDetails(false) : setShowDetails(true);
  };

  return (
    <Fragment>
      <div className="c-list">
        <img src={character.thumbnail} alt="gnomes"></img>
        <div className="c-list--details">
          <p>{character.name}</p>
          <p>{`Age:${character.age}`}</p>
          <p>{`Hair Color:${character.hair_color}`}</p>
          <p>{`Height:${character.height}`}</p>
          <button className="c-list--button" onClick={handleViewMoreInfo}>
            More Info
          </button>
        </div>
        <div>
          {showDetails && <DetailPanel character={character}></DetailPanel>}
        </div>
      </div>
    </Fragment>
  );
}

export default ResultsPanel;
