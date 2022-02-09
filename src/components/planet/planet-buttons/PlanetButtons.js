import React from "react";
import "./PlanetButtons.scss";
import PlanetButton from "./PlanetButton";
const PlanetButtons = ({ data, isMobile, isActive, changeContent }) => {
  return (
    <div className={isMobile ? "buttons-mobile" : "buttons-non-mobile"}>
      <PlanetButton
        data={data}
        type="overview"
        isMobile={isMobile}
        isActive={isActive}
        changeContent={changeContent}
        changeContentParams={[
          data.overview.content,
          data.overview.source,
          `assets/planet-${data.name.toLowerCase()}.svg`,
          false,
          "overview",
        ]}
        number={!isMobile ? "01" : ""}
        text="Overview"
      />

      <PlanetButton
        data={data}
        type="structure"
        isMobile={isMobile}
        isActive={isActive}
        changeContent={changeContent}
        changeContentParams={[
          data.structure.content,
          data.structure.source,
          `assets/planet-${data.name.toLowerCase()}-internal.svg`,
          false,
          "structure",
        ]}
        number={!isMobile ? "02" : ""}
        text={`${!isMobile ? "Internal " : ""}Structure`}
      />

      <PlanetButton
        data={data}
        type="geology"
        isMobile={isMobile}
        isActive={isActive}
        changeContent={changeContent}
        changeContentParams={[
          data.geology.content,
          data.geology.source,
          `assets/planet-${data.name.toLowerCase()}.svg`,
          true,
          "geology",
        ]}
        number={!isMobile ? "03" : ""}
        text={`${!isMobile ? "Surface " : ""}Geology`}
      />
    </div>
  );
};

export default PlanetButtons;
