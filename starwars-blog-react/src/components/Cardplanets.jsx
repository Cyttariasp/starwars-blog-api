import React from "react";

function Cardplanets(props) {
  return (
    <div
      className="card"
      style={{ width: "18rem", minWidth: "20rem", maxWidth: "20rem" }}
    >
      <img src={props.img} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Population: {props.population}</li>
          <li className="list-group-item">Terrain: {props.terrain}</li>
        </ul>
        <a href="#" className="btn btn-primary">
          Learn more
        </a>
        <a href="#" className="btn btn-warning">
          Fav
        </a>
      </div>
    </div>
  );
}

export default Cardplanets;
