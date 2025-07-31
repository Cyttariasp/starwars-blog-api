import React from "react";
import { Link } from "react-router-dom";

function Cardvehicules(props) {
  const handleFavClick = () => {
    props.addFavorite({
      uid: props.uid,
      name: props.name,
      type: "Vehicle",
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
          <li className="list-group-item">Lenght: {props.length}</li>
          <li className="list-group-item">Model: {props.model}</li>
          <li className="list-group-item">
            Vehicle class: {props.vehicle_class}
          </li>
        </ul>
        <Link to={`/Vehicles/${props.uid}`} className="btn btn-primary">
          Learn more
        </Link>
        <a
          href="#"
          className="btn btn-warning m-2 text-light"
          onClick={handleFavClick}
        >
          ♥
        </a>
      </div>
    </div>
  );
}

export default Cardvehicules;
