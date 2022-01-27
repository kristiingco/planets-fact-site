import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PlanetDescription from "./planet-description/PlanetDescription";
import PlanetStatistics from "./planet-statistics/PlanetStatistics";

const Planet = ({ data }) => {
  const location = useLocation();
  let [descContent, setDescContent] = useState(data.overview.content);
  let [descSource, setDescSource] = useState(data.overview.source);
  let [image, setImage] = useState(
    `assets/planet-${data.name.toLowerCase()}.svg`
  );
  let [showGeology, setShowGeology] = useState(false);
  useEffect(() => {
    console.log("Location changed");
    setDescContent(data.overview.content);
    setDescSource(data.overview.source);
    setImage(`assets/planet-${data.name.toLowerCase()}.svg`);
  }, [location]);

  const changeContent = (content, source, img, showGeology) => {
    setDescContent(content);
    setDescSource(source);
    setImage(img);
    setShowGeology(showGeology);
  };
  return (
    <div>
      <div>
        <button
          onClick={() => {
            changeContent(
              data.overview.content,
              data.overview.source,
              `assets/planet-${data.name.toLowerCase()}.svg`,
              false
            );
          }}
        >
          Overview
        </button>
        <button
          onClick={() => {
            changeContent(
              data.structure.content,
              data.structure.source,
              `assets/planet-${data.name.toLowerCase()}-internal.svg`,
              false
            );
          }}
        >
          Structure
        </button>
        <button
          onClick={() => {
            changeContent(
              data.geology.content,
              data.geology.source,
              `assets/planet-${data.name.toLowerCase()}.svg`,
              true
            );
          }}
        >
          Geology
        </button>
      </div>
      <img src={image} alt={`${data.name}`} />

      {showGeology && (
        <img
          src={`assets/geology-${data.name.toLowerCase()}.png`}
          alt={`${data.name}`}
        />
      )}
      <PlanetDescription
        name={data.name}
        content={descContent}
        source={descSource}
      />
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
