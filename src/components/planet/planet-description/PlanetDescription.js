import React from "react";

const PlanetDescription = ({ name, content, source }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{content}</p>
      <span>Source: {source}</span>
    </div>
  );
};

export default PlanetDescription;
