import React from "react";
import "./PlanetStatistics.scss";

const PlanetStatistics = ({ rotation, revolution, radius, temperature }) => {
  return (
    <div className="planet-statistics-list">
      <div className="planet-statistics">
        <span className="planet-statistics-type">Rotation Time</span>
        <span className="planet-statistics-number">{rotation}</span>
      </div>
      <div className="planet-statistics">
        <span className="planet-statistics-type">Revolution Time</span>
        <span className="planet-statistics-number">{revolution}</span>
      </div>
      <div className="planet-statistics">
        <span className="planet-statistics-type">Radius</span>
        <span className="planet-statistics-number">{radius}</span>
      </div>
      <div className="planet-statistics">
        <span className="planet-statistics-type">Average Temp.</span>
        <span className="planet-statistics-number">{temperature}</span>
      </div>
    </div>
  );
};

export default PlanetStatistics;
