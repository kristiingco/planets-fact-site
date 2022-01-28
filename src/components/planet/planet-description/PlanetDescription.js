import React from "react";
import "./PlanetDescription.scss";

const PlanetDescription = ({ name, content, source }) => {
  return (
    <div className="planet-description">
      <h1 className="planet-description-header">{name}</h1>
      <p className="planet-description-content">{content}</p>
      <span className="planet-description-source">
        Source: <a href={source}>Wikipedia</a>
        <img src="assets/icon-source.svg" alt="source" />
      </span>
    </div>
  );
};

export default PlanetDescription;
