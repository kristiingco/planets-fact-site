import React from "react";
import "./NavigationList.scss";
import { Link } from "react-router-dom";

const NavigationList = ({ data, toggle }) => {
  return (
    <div className={`navigation-list ${toggle}`}>
      <div className="navigation-links">
        {data.map((planet) => (
          <div className={"navigation-link "}>
            <Link
              className="navigation-link-planet"
              key={planet.name.toLowerCase()}
              to={`/${planet.name.toLowerCase()}`}
            >
              <div className="navigation-link-planet-info">
                <span className={`dot dot-${planet.name.toLowerCase()}`}></span>
                <span className="navigation-planet-name">{planet.name}</span>
              </div>

              <img
                className="navigation-link-chevron"
                src="assets/icon-chevron.svg"
                alt="chevron"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationList;
