import React, { useState, useEffect } from "react";
import "./Planet.scss";
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
  let [active, setActive] = useState("overview");

  useEffect(() => {
    console.log("Location changed");
    setDescContent(data.overview.content);
    setDescSource(data.overview.source);
    setImage(`assets/planet-${data.name.toLowerCase()}.svg`);
    setShowGeology(false);
    setActive("overview");
  }, [location]);

  const changeContent = (content, source, img, showGeology, active) => {
    setDescContent(content);
    setDescSource(source);
    setImage(img);
    setShowGeology(showGeology);
    setActive(active);
  };
  return (
    <div>
      <div className="buttons-mobile">
        <button
          className={`${
            active === "overview" ? "active" : ""
          } active-${data.name.toLowerCase()}`}
          onClick={() => {
            changeContent(
              data.overview.content,
              data.overview.source,
              `assets/planet-${data.name.toLowerCase()}.svg`,
              false,
              "overview"
            );
          }}
        >
          Overview
        </button>
        <button
          className={`${
            active === "structure" ? "active" : ""
          } active-${data.name.toLowerCase()}`}
          onClick={() => {
            changeContent(
              data.structure.content,
              data.structure.source,
              `assets/planet-${data.name.toLowerCase()}-internal.svg`,
              false,
              "structure"
            );
          }}
        >
          Structure
        </button>
        <button
          className={`${
            active === "geology" ? "active" : ""
          } active-${data.name.toLowerCase()}`}
          onClick={() => {
            changeContent(
              data.geology.content,
              data.geology.source,
              `assets/planet-${data.name.toLowerCase()}.svg`,
              true,
              "geology"
            );
          }}
        >
          Geology
        </button>
      </div>
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
      <div>
        <h1 className="planet-header">{data.name}</h1>
      </div>
      <div className="planet-content-container">
        <PlanetDescription content={descContent} source={descSource} />

        <div className="buttons-non-mobile">
          <button
            className={`${
              active === "overview" ? "active" : ""
            } active-${data.name.toLowerCase()}`}
            onClick={() => {
              changeContent(
                data.overview.content,
                data.overview.source,
                `assets/planet-${data.name.toLowerCase()}.svg`,
                false,
                "overview"
              );
            }}
          >
            <span>01</span>
            <span>Overview</span>
          </button>
          <button
            className={`${
              active === "structure" ? "active" : ""
            } active-${data.name.toLowerCase()}`}
            onClick={() => {
              changeContent(
                data.structure.content,
                data.structure.source,
                `assets/planet-${data.name.toLowerCase()}-internal.svg`,
                false,
                "structure"
              );
            }}
          >
            <span>02</span>
            <span>Internal Structure</span>
          </button>
          <button
            className={`${
              active === "geology" ? "active" : ""
            } active-${data.name.toLowerCase()}`}
            onClick={() => {
              changeContent(
                data.geology.content,
                data.geology.source,
                `assets/planet-${data.name.toLowerCase()}.svg`,
                true,
                "geology"
              );
            }}
          >
            <span>03</span>
            <span>Surface Geology</span>
          </button>
        </div>
      </div>

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
