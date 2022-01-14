import React from "react";
import NavigationList from "./navigation-list/NavigationList";

const Navigation = ({ data }) => {
  return (
    <div>
      The Planets <NavigationList data={data} />
    </div>
  );
};

export default Navigation;
