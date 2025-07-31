import React, { useEffect } from "react";
import Card from "../components/Card.jsx";
import Cardplanets from "../components/Cardplanets.jsx";
import Cardvehicles from "../components/Cardvehicles.jsx";
import Loadingcard from "../components/Loadingcard.jsx";

function Home({ addFavorite }) {
  const [loadingCharacters, setLoadingCharacters] = React.useState(true);
  const [characters, setCharacters] = React.useState([]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  console.log(addFavorite);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then(async (data) => {
        const details = [];

        for (let i = 0; i < data.results.length; i++) {
          const charact = data.results[i];

          try {
            const res = await fetch(charact.url);
            const json = await res.json();
            details.push({ ...json.result.properties, uid: charact.uid });
          } catch (error) {
            console.error("Error");
          }

          await delay(100);
        }
        setCharacters(details);
        setLoadingCharacters(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const [planets, setPlanets] = React.useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets")
      .then((res) => res.json())
      .then(async (data) => {
        const details = [];

        for (let i = 0; i < data.results.length; i++) {
          const planet = data.results[i];

          try {
            const res = await fetch(planet.url);
            const json = await res.json();
            details.push({ ...json.result.properties, uid: planet.uid });
          } catch (error) {
            console.error("Error");
          }
          await delay(100);
        }
        setPlanets(details);
      })
      .catch((err) => console.error(err));
  }, []);

  const [vehicles, setVehicles] = React.useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/vehicles")
      .then((res) => res.json())
      .then(async (data) => {
        const details = [];

        for (let i = 0; i < data.results.length; i++) {
          const vehicle = data.results[i];

          try {
            const res = await fetch(vehicle.url);
            const json = await res.json();
            details.push({ ...json.result.properties, uid: vehicle.uid });
          } catch (error) {
            console.error("Error");
          }
          await delay(100);
        }
        setVehicles(details);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home w-100 pt-5">
      <div className="my-2">
        <h1>Chatacters</h1>
        <div
          className="d-flex gap-5 overflow-auto"
          style={{ whiteSpace: "nowrap" }}
        >
          {loadingCharacters ? (
            <Loadingcard />
          ) : (
            characters.map((charact, index) => (
              <Card
                key={index}
                uid={charact.uid}
                name={charact.name}
                gender={charact.gender}
                hair={charact.hair_color}
                eye={charact.eye_color}
                addFavorite={addFavorite}
              />
            ))
          )}
        </div>
      </div>
      <div className="my-2">
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
              addFavorite={addFavorite}
            />
          ))}
        </div>
      </div>
      <div className="my-2">
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
              addFavorite={addFavorite}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
