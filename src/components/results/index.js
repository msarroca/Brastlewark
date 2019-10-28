import React, { useState, Fragment } from "react";
import DetailPanel from "../details";

function ResultsPanel({ character }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleViewMoreInfo = () => {
    setShowDetails(true);
  };

  const onCloseViewMoreInfo = () => {
    setShowDetails(false);
  };

  return (
    <Fragment>
      <div className="c-list">
        <img src={character.thumbnail} alt="gnomes"></img>
        <p>{character.name}</p>
        <p>{character.age}</p>
        <p>{character.hair_color}</p>
        <p>{character.height}</p>
        <button onClick={handleViewMoreInfo}>More Info</button>
      </div>
      <div>
        {showDetails && (
          <DetailPanel
            character={character}
            onClose={onCloseViewMoreInfo}
          ></DetailPanel>
        )}
      </div>
    </Fragment>
  );
}

export default ResultsPanel;
