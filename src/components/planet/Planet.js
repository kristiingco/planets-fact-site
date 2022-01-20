import React from "react";
import PlanetStatistics from "./planet-statistics/PlanetStatistics";

const Planet = ({ data }) => {
  return (
    <div>
      {data.name}
      <PlanetStatistics
        rotation={data.rotation}
        revolution={data.revolution}
        radius={data.radius}
        temperature={data.temperature}
      />
    </div>
  );
};

export default Planet;
