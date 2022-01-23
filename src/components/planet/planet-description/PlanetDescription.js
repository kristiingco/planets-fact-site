import React from "react";

const PlanetDescription = ({ content, source }) => {
  return (
    <div>
      <p>{content}</p>
      <span>Source: {source}</span>
    </div>
  );
};

export default PlanetDescription;
