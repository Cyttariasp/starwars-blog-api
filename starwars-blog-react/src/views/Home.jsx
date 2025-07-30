import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Card from "../components/Card.jsx";
import Cardplanets from "../components/Cardplanets.jsx";
import Cardvehicles from "../components/Cardvehicles.jsx";

function Home() {
  const [characters, setCharacters] = React.useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then(async (data) => {
        const details = await Promise.all(
          data.results.map(async (charact) => {
            console.log(charact);
            const res = await fetch(charact.url);
            const json = await res.json();
            return { ...json.result.properties, uid: charact.uid };
          })
        );
        setCharacters(details);
      })
      .catch((err) => console.error(err));
  }, []);

  const [planets, setPlanets] = React.useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((res) => res.json())
      .then(async (data) => {
        const details = await Promise.all(
          data.results.map(async (planet) => {
            const res = await fetch(planet.url);
            const json = await res.json();
            return { ...json.result.properties, uid: planet.uid };
          })
        );
        setPlanets(details);
      })
      .catch((err) => console.error(err));
  }, []);

  const [vehicles, setVehicles] = React.useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then((res) => res.json())
      .then(async (data) => {
        const details = await Promise.all(
          data.results.map(async (vehicle) => {
            const res = await fetch(vehicle.url);
            const json = await res.json();
            return { ...json.result.properties, uid: vehicle.uid };
          })
        );
        setVehicles(details);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home w-100">
      <div>
        <h1>Chatacters</h1>
        <div
          className="d-flex gap-5 overflow-auto"
          style={{ whiteSpace: "nowrap" }}
        >
          {characters.map((charact, index) => (
            <Card
              key={index}
              uid={charact.uid}
              name={charact.name}
              gender={charact.gender}
              hair={charact.hair_color}
              eye={charact.eye_color}
            />
          ))}
        </div>
      </div>
      <div>
        <h1>Planets</h1>
        <div
          className="d-flex gap-5 overflow-auto"
          style={{ whiteSpace: "nowrap" }}
        >
          {planets.map((planet, index) => (
            <Cardplanets
              key={index}
              uid={planet.uid}
              name={planet.name}
              population={planet.population}
              terrain={planet.terrain}
            />
          ))}
        </div>
      </div>
      <div>
        <h1>Vehicules</h1>
        <div
          className="d-flex gap-5 overflow-auto"
          style={{ whiteSpace: "nowrap" }}
        >
          {vehicles.map((vehicle, index) => (
            <Cardvehicles
              key={index}
              uid={vehicle.uid}
              name={vehicle.name}
              length={vehicle.length}
              model={vehicle.model}
              vehicle_class={vehicle.vehicle_class}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
