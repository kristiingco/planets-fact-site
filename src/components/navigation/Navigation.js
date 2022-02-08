import React, { useState, useEffect } from "react";
import "./Navigation.scss";
import { useLocation } from "react-router-dom";
import NavigationList from "./navigation-list/NavigationList";

const Navigation = ({ data }) => {
  const location = useLocation();
  const [toggle, setToggle] = useState("toggle-menu");

  useEffect(() => {
    setToggle("toggle-menu");
  }, [location]);

  const openOrClose = () => {
    if (toggle === "toggle-menu") {
      setToggle("");
    } else {
      setToggle("toggle-menu");
    }
  };

  return (
    <header className="navigation">
      <h2 className="navigation-header">The Planets</h2>{" "}
      <img src="/assets/icon-hamburger.svg" alt="menu" onClick={openOrClose} />
      <NavigationList data={data} toggle={toggle} />
    </header>
  );
};

export default Navigation;
