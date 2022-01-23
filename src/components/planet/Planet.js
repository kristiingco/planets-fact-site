import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PlanetDescription from "./planet-description/PlanetDescription";
import PlanetStatistics from "./planet-statistics/PlanetStatistics";

const Planet = ({ data }) => {
  const location = useLocation();
  let [descContent, setDescContent] = useState(data.overview.content);
  let [descSource, setDescSource] = useState(data.overview.source);
  useEffect(() => {
    console.log("Location changed");
    setDescContent(data.overview.content);
    setDescSource(data.overview.source);
  }, [location]);

  const changeContent = (content, source) => {
    setDescContent(content);
    setDescSource(source);
  };
  return (
    <div>
      {data.name}
      <button
        onClick={() => {
          changeContent(data.overview.content, data.overview.source);
        }}
      >
        Overview
      </button>
      <button
        onClick={() => {
          changeContent(data.structure.content, data.structure.source);
        }}
      >
        Structure
      </button>
      <button
        onClick={() => {
          changeContent(data.geology.content, data.geology.source);
        }}
      >
        Geology
      </button>
      <PlanetDescription content={descContent} source={descSource} />
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
