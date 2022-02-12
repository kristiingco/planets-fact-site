import React from "react";
import "./PlanetStatisticsItem.scss";

const PlanetStatisticsItem = ({ text, data }) => {
  return (
    <div className="planet-statistics">
      <span className="planet-statistics-type">{text}</span>
      <span className="planet-statistics-number">{data}</span>
    </div>
  );
};

export default PlanetStatisticsItem;
