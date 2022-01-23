import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useHistory,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Planet from "./components/planet/Planet";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((myJson) => {
        console.log(myJson);

        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useLocation();
  return (
    <div className="App">
      <Navigation data={data} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/mercury" />} />
        {data.map((planet) => {
          console.log(planet.name);
          return (
            <Route
              key={planet.name}
              path={`/${planet.name.toLowerCase()}`}
              element={<Planet data={planet} />}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
