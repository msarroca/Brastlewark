import React, { useState, Fragment } from "react";
import getApiInfo from "../../brastlewark-api";
import ResultsPanel from "../results";
import "./index.scss";

function SearchPanel() {
  const [population, setPopulation] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChange = event => {
    setSearchText(event.target.value);
  };

  const renderList = () => {
    return (
      <Fragment>
        {population
          .filter(
            population =>
              population.name.toLowerCase().includes(searchText) ||
              population.age == searchText ||
              population.hair_color.toLowerCase().includes(searchText)
          )
          .map(character => (
            <Fragment key={character.id}>
              <ResultsPanel character={character}></ResultsPanel>
            </Fragment>
          ))}
      </Fragment>
    );
  };

  React.useEffect(() => {
    getApiInfo().then(population => setPopulation(population));
  });

  return (
    <Fragment>
      <div className="c-title">
        <h2>Search population</h2>
      </div>
      <div className="c-searcharea">
        <input type="text" onChange={handleChange}></input>
      </div>
      <div className="c-results">{searchText !== "" && renderList()}</div>
    </Fragment>
  );
}

export default SearchPanel;
