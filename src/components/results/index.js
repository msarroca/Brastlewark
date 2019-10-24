import React, { useState, Fragment } from "react";

function ResultsPanel({ character }) {
  const [showDetails] = useState(false);
  const [setDetails] = useState(true);

  const handleCharacterDetail = () => {
    setDetails();
  };

  return (
    <Fragment>
      <div className="c-list">
        <p>{character.name}</p>
        <p>{character.age}</p>
        <p>{character.height}</p>
        <button onClick={handleCharacterDetail}>More Info</button>
      </div>
      <div></div>
    </Fragment>
  );
}

export default ResultsPanel;
