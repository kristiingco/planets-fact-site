import React, { useState, useEffect } from "react";
import "./Planet.scss";
import { useLocation } from "react-router-dom";
import PlanetButtons from "./planet-buttons/PlanetButtons";
import PlanetDescription from "./planet-description/PlanetDescription";
import PlanetStatistics from "./planet-statistics/PlanetStatistics";
import AnimatedPage from "../AnimatedPage";

const Planet = ({ data }) => {
  const location = useLocation();
  let [descContent, setDescContent] = useState(data.overview.content);
  let [descSource, setDescSource] = useState(data.overview.source);
  let [image, setImage] = useState(
    `assets/planet-${data.name.toLowerCase()}.svg`
  );
  let [showGeology, setShowGeology] = useState(false);
  let [active, setActive] = useState("overview");

  useEffect(() => {
    setDescContent(data.overview.content);
    setDescSource(data.overview.source);
    setImage(`assets/planet-${data.name.toLowerCase()}.svg`);
    setShowGeology(false);
    setActive("overview");
  }, [data]);

  const changeContent = (content, source, img, showGeology, active) => {
    setDescContent(content);
    setDescSource(source);
    setImage(img);
    setShowGeology(showGeology);
    setActive(active);
  };
  return (
    <AnimatedPage>
      <div>
        <PlanetButtons
          data={data}
          isMobile={true}
          isActive={active}
          changeContent={changeContent}
        />
        <div className="planet-information-container">
          <div className="planet-images">
            <img
              className="planet-main-image"
              src={image}
              alt={`${data.name}`}
              style={{ width: data.width }}
            />

            {showGeology && (
              <img
                className="planet-geology-image"
                src={`assets/geology-${data.name.toLowerCase()}.png`}
                alt={`${data.name}`}
                style={{ marginTop: data.geologyPosition }}
              />
            )}
          </div>
          <div className="planet-text-container">
            <div>
              <h1 className="planet-header">{data.name}</h1>
            </div>

            <div className="planet-content-container">
              <PlanetDescription content={descContent} source={descSource} />

              <PlanetButtons
                data={data}
                isMobile={false}
                isActive={active}
                changeContent={changeContent}
              />
            </div>
          </div>
        </div>
        <PlanetStatistics
          rotation={data.rotation}
          revolution={data.revolution}
          radius={data.radius}
          temperature={data.temperature}
        />
      </div>
    </AnimatedPage>
  );
};

export default Planet;
