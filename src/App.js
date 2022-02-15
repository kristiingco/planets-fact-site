import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/navigation/Navigation";
import Planet from "./components/planet/Planet";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json")
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  let location = useLocation();
  return (
    <div className="App">
      <Navigation data={data} />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Navigate replace to="/mercury" />} />
          {data.map((planet) => {
            return (
              <Route
                key={planet.name}
                path={`/${planet.name.toLowerCase()}`}
                element={<Planet data={planet} />}
              />
            );
          })}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
