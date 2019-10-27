import React, { useState, Fragment } from "react";

function DetailPanel({ character, onClose }) {
  return (
    <div>
      <div>{character.professions}</div>
      <div>{character.friends}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default DetailPanel;
