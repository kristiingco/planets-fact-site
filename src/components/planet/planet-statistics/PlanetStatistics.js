import React from "react";
import "./PlanetStatistics.scss";
import PlanetStatisticsItem from "./PlanetStatisticsItem";

const PlanetStatistics = ({ rotation, revolution, radius, temperature }) => {
  return (
    <div className="planet-statistics-list">
      <PlanetStatisticsItem text="Rotation Time" data={rotation} />
      <PlanetStatisticsItem text="Revolution Time" data={revolution} />
      <PlanetStatisticsItem text="Radius" data={radius} />
      <PlanetStatisticsItem text="Average Temp/" data={temperature} />
    </div>
  );
};

export default PlanetStatistics;
