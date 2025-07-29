import { Link, useParams } from "react-router-dom";
import React from "react";

function Planets() {
  const { id } = useParams();
  const [planet, setPlanets] = React.useState({});
  React.useEffect(() => {
    console.log(id);
    fetch(`https://www.swapi.tech/api/planets/${id}`)
      .then((res) => res.json())
      .then((data) => setPlanets(data.result.properties))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <div
            className="bg-secondary"
            style={{ height: "400px", width: "600px" }}
          ></div>{" "}
        </div>
        <div className="col-6">
          <h1>{planet.name}</h1>
          <p>{planet.info}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-2 text-danger">
          Name <br /> {planet.name}
        </div>
        <div className="col-2 text-danger">
          Climate <br /> {planet.climate}
        </div>
        <div className="col-2 text-danger">
          Population <br /> {planet.population}
        </div>
        <div className="col-2 text-danger">
          Oribital period <br /> {planet.orbital_period}
        </div>
        <div className="col-2 text-danger">
          Rotation period <br /> {planet.rotation_period}
        </div>
        <div className="col-2 text-danger">
          Diameter <br /> {planet.diameter}
        </div>
      </div>
    </div>
  );
}

export default Planets;
