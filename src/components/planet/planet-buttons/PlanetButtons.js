import React from "react";
import "./PlanetButtons.scss";

const PlanetButtons = ({ data, isMobile, isActive, changeContent }) => {
  return (
    <div className={isMobile ? "buttons-mobile" : "buttons-non-mobile"}>
      <button
        className={`${
          isActive === "overview" ? "active" : ""
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
        {!isMobile && <span>01</span>}
        <span>Overview</span>
      </button>
      <button
        className={`${
          isActive === "structure" ? "active" : ""
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
        {!isMobile && <span>02</span>}
        <span>{!isMobile && "Internal "}Structure</span>
      </button>
      <button
        className={`${
          isActive === "geology" ? "active" : ""
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
        {!isMobile && <span>03</span>}
        <span>{!isMobile && "Surface "}Geology</span>
      </button>
    </div>
  );
};

export default PlanetButtons;
