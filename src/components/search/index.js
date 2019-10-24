import React, { useState, useEffect } from "react";
import getApiInfo from "../../brastlewark-api";
import ResultsPanel from "../results";

function SearchPanel() {
  const [population, setPopulation] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChange = event => {
    setSearchText(event.target.value);
  };

  const renderList = () => {
    return (
      <div>
        {population
          .filter(population => population.name.includes(searchText))
          .map(character => (
            <ResultsPanel character={character}></ResultsPanel>
          ))}
      </div>
    );
  };

  useEffect(() => {
    getApiInfo().then(population => setPopulation(population));
  });

  return (
    <div>
      <h2>Search people</h2>
      <input type="text" onChange={handleChange}></input>
      <button type="submit">Search</button>
      <div className="c-results">
        <div className="c-results--title"></div>
        <div className="c-results--info">
          {searchText !== "" && renderList()}
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
