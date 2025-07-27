import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Card from "../components/Card.jsx";
import Cardplanets from "../components/Cardplanets.jsx";

function Home() {
  const [characters, setCharacters] = React.useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((res) => res.json())
      .then(async (data) => {
        const details = await Promise.all(
          data.results.map(async (charact) => {
            const res = await fetch(charact.url);
            const json = await res.json();
            return json.result.properties;
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
        const detailsMap = await Promise.all(
          data.results.map(async (planet) => {
            const res = await fetch(planet.url);
            const json = await res.json();
            return json.result.properties;
          })
        );
        setPlanets(detailsMap);
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
          {characters.map((charact) => (
            <Card
              key={charact.uid}
              name={charact.name}
              img={charact.url}
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
          {planets.map((planet) => (
            <Cardplanets
              key={planet.uid}
              name={planet.name}
              img={planet.url}
              population={planet.population}
              terrain={planet.terrain}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
