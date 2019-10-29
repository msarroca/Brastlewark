import React, { useState, Fragment } from "react";
import DetailPanel from "../details";
import "./index.scss";

function Card({ character }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewMoreInfo = () => {
    showDetails ? setShowDetails(false) : setShowDetails(true);
  };

  return (
    <Fragment>
      <div className="card-list">
        <img src={character.thumbnail} alt="gnomes"></img>
        <div className="card-list--details">
          <p className="card-list--name">{character.name}</p>
          <p>{`Age:\u00A0${character.age}`}</p>
          <p>{`Hair Color:\u00A0${character.hair_color}`}</p>
          <p>{`Height:\u00A0${character.height}`}</p>
          <button className="card-list--button" onClick={handleViewMoreInfo}>
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

export default Card;
