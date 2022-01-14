import React from "react";
import { Link } from "react-router-dom";

const NavigationList = ({ data }) => {
  return (
    <div>
      {data.map((planet) => (
        <Link
          key={planet.name.toLowerCase()}
          to={`/${planet.name.toLowerCase()}`}
        >
          {planet.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationList;
