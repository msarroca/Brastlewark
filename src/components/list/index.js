import React, { useState, Fragment } from "react";
import getApiInfo from "../../brastlewark-api";
import Card from "../card";
import "./index.scss";
import { TITLE, DESCRIPTION } from "../../constants";

function List() {
  const [population, setPopulation] = useState([]);
  const [searchText, setSearchText] = useState("260");

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
              <Card character={character}></Card>
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
      <div className="list-title">
        <h2>{TITLE}</h2>
        <h3>{DESCRIPTION}</h3>
      </div>
      <div className="list-searcharea">
        <input
          placeholder="Ex: 260, red, fizkin "
          type="text"
          onChange={handleChange}
        ></input>
      </div>
      <div className="list-results">{searchText !== "" && renderList()}</div>
    </Fragment>
  );
}

export default List;
