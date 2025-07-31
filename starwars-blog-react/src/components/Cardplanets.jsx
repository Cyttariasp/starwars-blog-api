import React from "react";
import { Link } from "react-router-dom";

function Cardplanets(props) {
  const handleFavClick = () => {
    props.addFavorite({
      uid: props.uid,
      name: props.name,
      type: "Planet",
    });
  };

  return (
    <div className="card p-0" style={{ width: "400px", minWidth: "400px" }}>
      <div
        className="bg-secondary d-flex m-0 p-0 rounded-top"
        style={{ height: "200px", width: "400px" }}
      ></div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Population: {props.population}</li>
          <li className="list-group-item">Terrain: {props.terrain}</li>
        </ul>
        <Link to={`/Planets/${props.uid}`} className="btn btn-primary">
          Learn more
        </Link>
        <a className="btn btn-warning m-2 text-light" onClick={handleFavClick}>
          ♥
        </a>
      </div>
    </div>
  );
}

export default Cardplanets;
