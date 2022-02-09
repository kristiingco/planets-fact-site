import React from "react";
import "./PlanetButton.scss";

const PlanetButton = ({
  data,
  type,
  isMobile,
  isActive,
  changeContent,
  changeContentParams,
  number,
  text,
}) => {
  return (
    <button
      className={`${
        isActive === type ? "active" : ""
      } active-${data.name.toLowerCase()}`}
      onClick={() => {
        changeContent(...changeContentParams);
      }}
    >
      {!isMobile && <span>{number}</span>}
      <span>{text}</span>
    </button>
  );
};

export default PlanetButton;
