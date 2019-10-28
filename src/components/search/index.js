import React, { useState, useEffect } from "react";
import getApiInfo from "../../brastlewark-api";
import ResultsPanel from "../results";

function SearchPanel() {
  const [population, setPopulation] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [noResults, setNoResults] = useState(true);

  const handleChange = event => {
    setSearchText(event.target.value);
  };

  const renderList = () => {
    return (
      <div>
        {population
          .filter(
            population =>
              population.name.toLowerCase().includes(searchText) ||
              population.age == searchText ||
              population.hair_color.toLowerCase().includes(searchText)
          )
          .map(character => (
            <div key={character.id}>
              <ResultsPanel character={character}></ResultsPanel>
            </div>
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
      <div className="c-results">
        <div className="c-results--title"></div>
        <div className="c-results--info">
          {renderList() && searchText !== "" && <div>No results</div>}
          {searchText !== "" && renderList()}
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
