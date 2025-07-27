import { Link } from "react-router-dom";
import React from "react";

function Characters(props) {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img
            src="https://starwarsblog.com/wp-content/uploads/2020/05/Star-Wars-Characters-1.jpg"
            className="img-fluid"
            alt="Star Wars Characters"
          />
        </div>
        <div className="col-6">
          <h1>{props.name}</h1>
          <p>{props.info}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-2">Name {props.name}</div>
        <div className="col-2">Birth year {props.year}</div>
        <div className="col-2">Gender {props.gender}</div>
        <div className="col-2">Height {props.height}</div>
        <div className="col-2">Skin color {props.skin}</div>
        <div className="col-2">Eye color {props.eyes}</div>
      </div>
    </div>
  );
}

export default Characters;
